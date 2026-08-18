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
  revalidatePath("/dashboard");
  revalidatePath("/profile");
}

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
  revalidatePath("/dashboard");
  revalidatePath("/profile");
}

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
  revalidatePath("/dashboard");
  revalidatePath("/profile");
}

export async function updateBooking(bookingId, data) {
  await requireAdmin();

  if (!bookingId) {
    throw new Error("Booking ID is required.");
  }

  const {
    fullName,
    email,
    phone,
    gender,
    dateOfBirth,
    emergencyContact,
    prayerRequest,
    notes,
    status,
  } = data;

  if (
    !fullName ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !emergencyContact
  ) {
    throw new Error("Please fill in all required fields.");
  }

  const dob = new Date(`${dateOfBirth}T00:00:00`);

  if (Number.isNaN(dob.getTime())) {
    throw new Error("Please enter a valid date of birth.");
  }

  await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      gender: gender.trim(),
      dateOfBirth: dob,
      emergencyContact: emergencyContact.trim(),
      prayerRequest: prayerRequest?.trim() || null,
      notes: notes?.trim() || null,
      status,
    },
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/dashboard");
  revalidatePath("/profile");
}
