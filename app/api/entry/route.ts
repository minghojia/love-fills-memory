import { NextResponse } from "next/server";

let memory: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  const entry = {
    id: Date.now().toString(),
    text: body.text,
    createdAt: Date.now(),
  };

  memory.unshift(entry);

  return NextResponse.json({ entry });
}