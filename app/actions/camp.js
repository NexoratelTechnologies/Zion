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

export async function createCamp(previousState, formData) {
  await requireAdmin();

  const name = formData.get("name")?.trim();
  const description = formData.get("description")?.trim();
  const location = formData.get("location")?.trim();
  const capacityValue = formData.get("capacity");
  const arrivalDate = formData.get("arrivalDate");
  const departureDate = formData.get("departureDate");

  if (!name || !arrivalDate || !departureDate) {
    return {
      error: "Camp name, arrival date and departure date are required.",
    };
  }

  if (new Date(departureDate) <= new Date(arrivalDate)) {
    return {
      error: "Departure date must be after arrival date.",
    };
  }

  const capacity = capacityValue ? Number.parseInt(capacityValue, 10) : null;

  if (capacityValue && (!capacity || capacity < 1)) {
    return {
      error: "Capacity must be a valid number.",
    };
  }

  try {
    await prisma.camp.create({
      data: {
        name,
        description: description || null,
        location: location || null,
        capacity,
        arrivalDate: new Date(arrivalDate),
        departureDate: new Date(departureDate),
      },
    });

    revalidatePath("/admin/camps");
    revalidatePath("/camp");
    revalidatePath("/camp/book");

    return {
      success: true,
      message: "Camp created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      error: "Failed to create camp.",
    };
  }
}

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
