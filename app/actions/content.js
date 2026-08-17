"use server";

import { auth } from "../../auth";
import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateSiteContent(contentId, value) {
  const session = await auth();

  if (!session?.user) {
    return {
      error: "You must be logged in.",
    };
  }

  if (session.user.role !== "ADMIN") {
    return {
      error: "You are not authorized to edit site content.",
    };
  }

  if (!contentId) {
    return {
      error: "Content ID is required.",
    };
  }

  try {
    await prisma.siteContent.update({
      where: {
        id: contentId,
      },
      data: {
        value,
      },
    });

    revalidatePath("/admin/content");
    revalidatePath(`/admin/content/${contentId}`);

    return {
      success: true,
    };
  } catch {
    return {
      error: "Failed to update site content.",
    };
  }
}
