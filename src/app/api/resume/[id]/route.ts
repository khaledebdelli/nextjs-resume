import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  const id = Number(context.params.id || 0)
  const cv = await prisma.cv.findFirst({
    where: {
        id: id
    }
  });
  return NextResponse.json({ cv });
};