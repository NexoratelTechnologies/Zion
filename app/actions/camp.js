"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return session;
}

/*
 * =========================================================
 * CREATE CAMP
 * =========================================================
 */

export async function createCamp(previousState, formData) {
  await requireAdmin();

  const name = formData.get("name")?.trim();
  const description = formData.get("description")?.trim();
  const location = formData.get("location")?.trim();
  const capacityValue = formData.get("capacity")?.trim();
  const arrivalDate = formData.get("arrivalDate");
  const departureDate = formData.get("departureDate");
  const status = formData.get("status");

  if (!name || !arrivalDate || !departureDate) {
    return {
      error: "Camp name, arrival date and departure date are required.",
      success: false,
    };
  }

  const arrival = new Date(`${arrivalDate}T00:00:00`);
  const departure = new Date(`${departureDate}T00:00:00`);

  if (Number.isNaN(arrival.getTime()) || Number.isNaN(departure.getTime())) {
    return {
      error: "Please enter valid arrival and departure dates.",
      success: false,
    };
  }

  if (departure <= arrival) {
    return {
      error: "Departure date must be after arrival date.",
      success: false,
    };
  }

  let capacity = null;

  if (capacityValue) {
    capacity = Number.parseInt(capacityValue, 10);

    if (!Number.isInteger(capacity) || capacity < 1) {
      return {
        error: "Capacity must be a valid number greater than 0.",
        success: false,
      };
    }
  }

  const campStatus = status === "CLOSED" ? "CLOSED" : "OPEN";

  try {
    await prisma.camp.create({
      data: {
        name,
        description: description || null,
        location: location || null,
        capacity,
        arrivalDate: arrival,
        departureDate: departure,
        status: campStatus,
      },
    });

    revalidatePath("/admin/camps");
    revalidatePath("/camp");
    revalidatePath("/camp/book");

    return {
      error: null,
      success: true,
      message: "Camp created successfully.",
    };
  } catch (error) {
    console.error("createCamp error:", error);

    return {
      error: "Failed to create camp. Please try again.",
      success: false,
    };
  }
}

/*
 * =========================================================
 * DELETE CAMP
 * =========================================================
 */

export async function deleteCamp(campId) {
  await requireAdmin();

  if (!campId) {
    throw new Error("Camp ID is required.");
  }

  await prisma.camp.delete({
    where: {
      id: campId,
    },
  });

  revalidatePath("/admin/camps");
  revalidatePath("/camp");
  revalidatePath("/camp/book");
}

/*
 * =========================================================
 * CREATE BOOKING
 * =========================================================
 */

export async function createBooking(previousState, formData) {
  const session = await auth();

  const fullName = formData.get("fullName")?.trim();
  const email = formData.get("email")?.trim().toLowerCase();
  const phone = formData.get("phone")?.trim();
  const gender = formData.get("gender");
  const dateOfBirth = formData.get("dateOfBirth");
  const emergencyContact = formData.get("emergencyContact")?.trim();
  const campId = formData.get("campId");
  const arrivalDate = formData.get("arrivalDate");
  const departureDate = formData.get("departureDate");
  const prayerRequest = formData.get("prayerRequest")?.trim();
  const notes = formData.get("notes")?.trim();

  /*
   * REQUIRED FIELDS
   */

  if (
    !fullName ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !emergencyContact ||
    !campId ||
    !arrivalDate ||
    !departureDate
  ) {
    return {
      success: false,
      error: "Please complete all required fields.",
      bookingId: null,
    };
  }

  /*
   * FIND CAMP
   */

  const camp = await prisma.camp.findUnique({
    where: {
      id: campId,
    },
  });

  if (!camp) {
    return {
      success: false,
      error: "The selected camp could not be found.",
      bookingId: null,
    };
  }

  /*
   * CAMP MUST BE OPEN
   */

  if (camp.status !== "OPEN") {
    return {
      success: false,
      error: "This camp is currently closed for bookings.",
      bookingId: null,
    };
  }

  /*
   * VALIDATE DATES
   */

  const dob = new Date(`${dateOfBirth}T00:00:00`);
  const arrival = new Date(`${arrivalDate}T00:00:00`);
  const departure = new Date(`${departureDate}T00:00:00`);

  if (
    Number.isNaN(dob.getTime()) ||
    Number.isNaN(arrival.getTime()) ||
    Number.isNaN(departure.getTime())
  ) {
    return {
      success: false,
      error: "Please provide valid dates.",
      bookingId: null,
    };
  }

  /*
   * BOOKING DATES MUST FALL WITHIN CAMP DATES
   */

  if (arrival < camp.arrivalDate || arrival > camp.departureDate) {
    return {
      success: false,
      error: "Your arrival date must fall within the camp dates.",
      bookingId: null,
    };
  }

  if (departure < camp.arrivalDate || departure > camp.departureDate) {
    return {
      success: false,
      error: "Your departure date must fall within the camp dates.",
      bookingId: null,
    };
  }

  if (departure < arrival) {
    return {
      success: false,
      error: "Departure date cannot be before arrival date.",
      bookingId: null,
    };
  }

  /*
   * GENERATE BOOKING ID
   */

  const bookingId = `ZION-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 7)
    .toUpperCase()}`;

  /*
   * CREATE BOOKING
   */

  try {
    const booking = await prisma.booking.create({
      data: {
        bookingId,

        campId: camp.id,

        // Logged-in user gets attached.
        // Visitor remains null.
        userId: session?.user?.id || null,

        fullName,
        email,
        phone,
        gender,
        dateOfBirth: dob,
        emergencyContact,
        prayerRequest: prayerRequest || null,
        notes: notes || null,

        status: "PENDING",
      },
    });

    /*
     * REFRESH RELEVANT PAGES
     */

    revalidatePath("/camp");
    revalidatePath("/camp/book");
    revalidatePath("/dashboard");
    revalidatePath("/profile");
    revalidatePath("/admin/bookings");

    return {
      success: true,
      error: null,
      bookingId: booking.bookingId,
    };
  } catch (error) {
    console.error("createBooking error:", error);

    return {
      success: false,
      error: "Something went wrong while submitting your booking.",
      bookingId: null,
    };
  }
}
