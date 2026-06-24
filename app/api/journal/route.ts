import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  // 🔴 MVP SAFE MODE (no API key yet)
  // We'll upgrade to real AI in C2

  const response = generateInsight(text);

  return NextResponse.json({ result: response });
}

// 🧠 Simple “AI-like engine” (temporary SaaS logic)
function generateInsight(text: string) {
  return `
🧠 情緒分析：
根據你的描述：「${text.slice(0, 20)}...」
照護者可能處於高壓與疲憊狀態

💬 建議回應：
使用短句 + 重複安撫語氣

🌙 行為建議：
避免對抗，維持環境穩定

💖 照護提醒：
你不是孤單的，這是長期照護的正常壓力
  `.trim();
}