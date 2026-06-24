import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  return NextResponse.json({
    result: `
🧠 情緒分析：
照護者可能處於疲勞與不確定狀態

💬 建議回應：
使用短句安撫，不要糾正內容

🌙 今日建議：
維持環境穩定與語氣一致

💖 提醒：
你已經做得很好了
    `.trim(),
  });
}