import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { memoryId, content } = await req.json();

  // 1️⃣ Call Claude
  const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.CLAUDE_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet",
      max_tokens: 800,
      messages: [
        {
          role: "user",
          content: `${content}`,
        },
      ],
    }),
  });

  const aiData = await aiRes.json();

  const summaryText = aiData.content[0].text;

  let summaryJson;
  try {
    summaryJson = JSON.parse(summaryText);
  } catch (e) {
    summaryJson = {
      error: "invalid json",
      raw: summaryText,
    };
  }

  // 2️⃣ Save to Supabase
  const { data } = await supabase
    .from("summaries")
    .insert({
      memory_id: memoryId,
      summary_json: summaryJson,
    })
    .select()
    .single();

  return NextResponse.json(data);
}