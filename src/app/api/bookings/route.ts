import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/bookings - list bookings (for demo: all bookings)
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: { select: { name: true, email: true } },
        service: { select: { name: true, price: true, duration: true } },
        therapist: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Bookings GET error:", error);
    return NextResponse.json({ bookings: [], message: "No bookings found." });
  }
}

// POST /api/bookings - create a new booking
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, serviceId, therapistId, date, totalPrice } = body;

    if (!userId || !serviceId || !date || !totalPrice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        serviceId,
        therapistId: therapistId || null,
        date: new Date(date),
        totalPrice: Number(totalPrice),
        status: "PENDING",
      },
    });

    // Award loyalty points: 1 point per $1 spent
    await prisma.loyalty.upsert({
      where: { userId },
      update: { points: { increment: Math.floor(totalPrice) } },
      create: { userId, points: Math.floor(totalPrice), tier: "BRONZE" },
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    console.error("Bookings POST error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
