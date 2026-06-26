import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  return NextResponse.json({
    result: `Reflection: I hear your caregiving moment — "${text}". You are doing your best, and that matters.`,
  });
}