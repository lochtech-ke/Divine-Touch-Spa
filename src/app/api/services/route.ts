import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/services - return all services grouped by category
export async function GET() {
  try {
    const categories = await prisma.serviceCategory.findMany({
      include: {
        services: {
          where: { isActive: true },
          orderBy: { name: "asc" },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Services API error:", error);
    // Return static fallback data if DB not seeded
    return NextResponse.json({
      categories: [],
      message: "Database not seeded. Please run prisma db seed.",
    }, { status: 200 });
  }
}
