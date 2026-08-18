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

export async function createBooking(previousState, formData) {
  const session = await auth();

  const campId = formData.get("campId")?.trim();
  const fullName = formData.get("fullName")?.trim();
  const email = formData.get("email")?.trim().toLowerCase();
  const phone = formData.get("phone")?.trim();
  const gender = formData.get("gender")?.trim();
  const dateOfBirth = formData.get("dateOfBirth");
  const emergencyContact = formData.get("emergencyContact")?.trim();
  const prayerRequest = formData.get("prayerRequest")?.trim();
  const notes = formData.get("notes")?.trim();

  if (
    !campId ||
    !fullName ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !emergencyContact
  ) {
    return {
      success: false,
      error: "Please fill in all required fields.",
      bookingId: null,
    };
  }

  const dob = new Date(`${dateOfBirth}T00:00:00`);

  if (Number.isNaN(dob.getTime())) {
    return {
      success: false,
      error: "Please enter a valid date of birth.",
      bookingId: null,
    };
  }

  try {
    const camp = await prisma.camp.findUnique({
      where: {
        id: campId,
      },
      include: {
        bookings: {
          where: {
            status: {
              in: ["PENDING", "APPROVED"],
            },
          },
        },
      },
    });

    if (!camp) {
      return {
        success: false,
        error: "The selected camp could not be found.",
        bookingId: null,
      };
    }

    if (camp.status !== "OPEN") {
      return {
        success: false,
        error: "This camp is currently closed for bookings.",
        bookingId: null,
      };
    }

    if (camp.capacity !== null && camp.bookings.length >= camp.capacity) {
      return {
        success: false,
        error: "Sorry, this camp is already full.",
        bookingId: null,
      };
    }

    const bookingId = `ZION-${Date.now().toString().slice(-8)}`;

    const booking = await prisma.booking.create({
      data: {
        bookingId,
        campId: camp.id,
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

    revalidatePath("/camp/book");
    revalidatePath("/profile");
    revalidatePath("/dashboard");
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
      error: "Something went wrong while creating your booking.",
      bookingId: null,
    };
  }
}

/* -------------------------------- */
/* ADMIN: APPROVE BOOKING            */
/* -------------------------------- */

export async function approveBooking(bookingId) {
  await requireAdmin();

  if (!bookingId) {
    throw new Error("Booking ID is required.");
  }

  await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status: "APPROVED",
    },
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/profile");
  revalidatePath("/dashboard");
}

/* -------------------------------- */
/* ADMIN: DECLINE BOOKING            */
/* -------------------------------- */

export async function declineBooking(bookingId) {
  await requireAdmin();

  if (!bookingId) {
    throw new Error("Booking ID is required.");
  }

  await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status: "DECLINED",
    },
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/profile");
  revalidatePath("/dashboard");
}

/* -------------------------------- */
/* ADMIN: DELETE BOOKING             */
/* -------------------------------- */

export async function deleteBooking(bookingId) {
  await requireAdmin();

  if (!bookingId) {
    throw new Error("Booking ID is required.");
  }

  await prisma.booking.delete({
    where: {
      id: bookingId,
    },
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/profile");
  revalidatePath("/dashboard");
}
