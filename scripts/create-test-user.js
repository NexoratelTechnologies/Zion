import "dotenv/config";
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);
  const user = await prisma.user.create({
    data: {
      name: "Test Admin",
      email: "admin@zion.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log("Created:", user);
}

main();
