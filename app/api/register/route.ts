import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
