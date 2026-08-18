"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createBooking(previousState, formData) {
  const session = await auth();

  const fullName = formData.get("fullName")?.trim();
  const email = formData.get("email")?.trim().toLowerCase();
  const phone = formData.get("phone")?.trim();
  const gender = formData.get("gender")?.trim();
  const dateOfBirth = formData.get("dateOfBirth");
  const emergencyContact = formData.get("emergencyContact")?.trim();
  const prayerRequest = formData.get("prayerRequest")?.trim();
  const notes = formData.get("notes")?.trim();

  if (
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
    // For now we use one camp.
    // Later we can make camps dynamic.
    const camp = await prisma.camp.findFirst();

    if (!camp) {
      return {
        success: false,
        error: "No prayer camp is currently available.",
        bookingId: null,
      };
    }

    const bookingId = `ZION-${Date.now().toString().slice(-8)}`;

    const booking = await prisma.booking.create({
      data: {
        bookingId,
        campId: camp.id,

        // Logged-in users are connected to their account.
        // Visitors simply have no userId.
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
