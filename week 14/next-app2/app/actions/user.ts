"use server";

import { prisma } from "@/lib/db";

export async function solve(email: string, password: string) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return { success: true, message: "User created successfully!", user };
  } catch (error: any) {
    console.error("Error processing request:", error);

    return {
      success: false,
      message: "Error creating user.",
      error: error.message,
    };
  }
}
