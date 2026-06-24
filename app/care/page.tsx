"use client";

import { useState } from "react";

export default function CarePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateCarePlan = async () => {
    if (!input) return;

    setLoading(true);
    setResult("");

    // 🔵 MVP MOCK（之後可以換 Claude API）
    setTimeout(() => {
      setResult(`
🌤️ 今日照護建議

🧠 情境理解：
${input}

🌿 建議照護方式：
- 保持環境安靜與熟悉感
- 使用簡單、短句溝通
- 避免糾正記憶錯誤

💬 建議說法：
「我在這裡陪你，你是安全的。」

⚠️ 避免：
- 爭論
- 高壓指令
- 情緒對抗

💖 照護者提醒：
你已經做得很好了，不需要完美，只需要陪伴。
      `);
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1d1d1f]">

      {/* NAV */}
      <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between">
        <a href="/" className="text-sm text-gray-500">← 回首頁</a>
        <div className="text-sm font-medium">AI 照護助手</div>
      </div>

      {/* TITLE */}
      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          生成今日照護建議
        </h1>

        <p className="mt-4 text-gray-500">
          描述當下情況，AI 會幫你生成溫和、可執行的照護建議。
        </p>
      </section>

      {/* INPUT */}
      <section className="max-w-3xl mx-auto px-6 mt-10">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例如：媽媽晚上一直走動、不願意睡覺、情緒焦躁..."
          className="w-full h-40 p-4 border rounded-2xl bg-white shadow-sm focus:outline-none"
        />

        <button
          onClick={generateCarePlan}
          className="mt-4 px-6 py-3 bg-black text-white rounded-full text-sm"
        >
          {loading ? "生成中..." : "生成照護建議"}
        </button>
      </section>

      {/* RESULT */}
      {result && (
        <section className="max-w-3xl mx-auto px-6 mt-10">
          <div className="bg-white border rounded-3xl p-6 shadow-sm whitespace-pre-line leading-relaxed">
            {result}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-20 py-10 text-center text-xs text-gray-400">
        Love Fills Memory AI Care Assistant
      </footer>

    </main>
  );
}