"use server";

import { auth } from "../../auth";
import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPrayerRequest(previousState, formData) {
  const session = await auth();

  if (!session?.user) {
    return { error: "You must be logged in to submit a prayer request." };
  }

  const name = formData.get("name")?.toString().trim();
  const department = formData.get("department")?.toString().trim();
  const branch = formData.get("branch")?.toString().trim();
  const request = formData.get("request")?.toString().trim();
  const note = formData.get("note")?.toString().trim() || null;

  if (!name || !department || !branch || !request) {
    return { error: "Please fill in all required fields." };
  }

  // if the note mentions "anonymous", flag it so the admin view can
  // surface that the requester has asked not to be identified publicly
  const anonymous = note ? /anonymous/i.test(note) : false;

  try {
    await prisma.prayerRequest.create({
      data: {
        userId: session.user.id,
        name,
        department,
        branch,
        request,
        note,
        anonymous,
      },
    });

    revalidatePath("/prayer");
    revalidatePath("/profile");
    revalidatePath("/admin/prayer-requests");

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
