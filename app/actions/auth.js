"use server";

import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { signIn } from "../../auth";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";

export async function signup(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // Basic validation
  if (!name || !email || !password) {
    return { error: "Please fill in all fields." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  // Check if email already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (existingUser) {
    return { error: "An account with this email already exists." };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  await prisma.user.create({
    data: {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    },
  });

  // Send them to login after successful signup
  redirect("/login");
}

export async function login(previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error?.type === "CredentialsSignin") {
      return { error: "Invalid email or password." };
    }

    throw error;
  }

  return { success: true };
}

export async function updateUserRole(previousState, formData) {
  const userId = formData.get("userId");
  const role = formData.get("role");

  const session = await auth();

  if (!session?.user) {
    return { error: "You must be logged in." };
  }

  if (session.user.role !== "ADMIN") {
    return { error: "You are not authorized to do this." };
  }

  if (!["VISITOR", "USER", "ADMIN"].includes(role)) {
    return { error: "Invalid role." };
  }

  if (session.user.id === userId && role !== "ADMIN") {
    return { error: "You cannot remove your own admin access." };
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    });

    revalidatePath("/admin/users");

    return { success: true };
  } catch {
    return { error: "Failed to update user role." };
  }
}

export async function updateProfile(formData) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim().toLowerCase();

  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
      NOT: {
        id: session.user.id,
      },
    },
  });

  if (existingUser) {
    throw new Error("That email is already in use.");
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name,
      email,
    },
  });

  redirect("/profile");
}

export async function changePassword(formData) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  if (!currentPassword || !newPassword || !confirmPassword) {
    throw new Error("All password fields are required.");
  }

  if (newPassword !== confirmPassword) {
    throw new Error("New passwords do not match.");
  }

  if (newPassword.length < 8) {
    throw new Error("New password must be at least 8 characters.");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const passwordMatches = await bcrypt.compare(currentPassword, user.password);

  if (!passwordMatches) {
    throw new Error("Current password is incorrect.");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  redirect("/profile");
}
