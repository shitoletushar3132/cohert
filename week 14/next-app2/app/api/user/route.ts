import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON body of the request
    // Perform your logic here

    const user = client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    console.log((await user).id);
    return NextResponse.json({
      message: "You are Login",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const user = await client.user.findFirst();

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
