import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are a compassionate caregiving assistant specializing in dementia care.

Your role:
- Support family caregivers emotionally
- Help them feel less alone
- Respond gently and calmly
- Never judge or criticize
- Keep responses short (3–6 sentences max)
- Always use Traditional Chinese

Style:
- Warm, human, grounded
- Avoid clinical language
- Avoid information overload
`;

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    // TEMP SAFE RESPONSE (no OpenAI dependency)
    const result = `🫶 照護回應：

我聽見你的感受了。
照顧的過程真的不容易，你已經做得很好了。

你不用一個人承擔所有事情，慢慢來就好。`;

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { result: "發生錯誤，但你已經做得很好了。" },
      { status: 500 }
    );
  }
}