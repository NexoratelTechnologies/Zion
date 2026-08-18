"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createBooking(prevState, formData) {
  try {
    const session = await auth();

    const campId = formData.get("campId");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const numberOfPeople = Number(formData.get("numberOfPeople"));

    if (!campId || !name || !email || !phone || !numberOfPeople) {
      return {
        error: "Please fill in all required fields.",
        success: false,
        bookingId: null,
      };
    }

    const camp = await prisma.camp.findUnique({
      where: {
        id: campId,
      },
    });

    if (!camp) {
      return {
        error: "The selected camp does not exist.",
        success: false,
        bookingId: null,
      };
    }

    if (!camp.isActive) {
      return {
        error: "This camp is no longer available for booking.",
        success: false,
        bookingId: null,
      };
    }

    const bookingId = `ZION-${crypto
      .randomUUID()
      .replace(/-/g, "")
      .slice(0, 8)
      .toUpperCase()}`;

    const booking = await prisma.booking.create({
      data: {
        bookingId,
        campId,
        name,
        email,
        phone,
        numberOfPeople,
        userId: session?.user?.id ?? null,
        role: session?.user ? "USER" : "VISITOR",
        status: "PENDING",
      },
    });

    revalidatePath("/camp");
    revalidatePath("/dashboard");
    revalidatePath("/profile");
    revalidatePath("/admin/bookings");

    return {
      error: null,
      success: true,
      bookingId: booking.bookingId,
    };
  } catch (error) {
    console.error("CREATE BOOKING ERROR:", error);

    return {
      error: "Something went wrong while creating your booking.",
      success: false,
      bookingId: null,
    };
  }
}
