"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
}

export async function updateBookingStatus(bookingId, status) {
  await requireAdmin();

  if (!bookingId) {
    throw new Error("Booking ID is required.");
  }

  if (!["APPROVED", "DECLINED"].includes(status)) {
    throw new Error("Invalid booking status.");
  }

  await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status,
    },
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/dashboard");
  revalidatePath("/profile");
}
