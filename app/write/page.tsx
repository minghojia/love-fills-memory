"use client";

import { useState, useEffect } from "react";

type Entry = {
  id: number;
  input: string;
  output: string;
  date: string;
};

async function generateAI(text: string) {
  const res = await fetch("/api/journal", {
    method: "POST",
    body: JSON.stringify({ text }),
  });

  const data = await res.json();
  return data.result;
}

export default function WritePage() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journals") || "[]");
    setEntries(saved);
  }, []);

 async function saveEntry() {
    if (!input.trim()) return;

    setLoading(true);

    const output = await generateAI(input);

    const newEntry: Entry = {
      id: Date.now(),
      input,
      output,
      date: new Date().toISOString(),
    };

    const updated = [newEntry, ...entries];

    localStorage.setItem("journals", JSON.stringify(updated));
    setEntries(updated);

    setInput("");

    setTimeout(() => {
      setLoading(false);
    }, 400);
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10 bg-[#FAF7F2] min-h-screen">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">
        📖 Care Journal
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        記錄照護中的每一天
      </p>

      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-4">
        <textarea
          className="w-full h-40 outline-none text-sm resize-none"
          placeholder="寫下今天發生的事情..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={saveEntry}
          className="mt-4 px-4 py-2 bg-black text-white rounded-xl text-sm"
        >
          {loading ? "生成中..." : "儲存日記"}
        </button>
      </div>

      {/* Timeline */}
      <div className="mt-10 space-y-4">
        {entries.map((e) => (
          <div
            key={e.id}
            className="bg-white border rounded-2xl p-4 shadow-sm"
          >
            <p className="text-xs text-gray-400">
              {new Date(e.date).toLocaleString()}
            </p>

            <p className="mt-2 text-sm font-medium">
              🧠 照護內容：{e.input}
            </p>

            <pre className="mt-3 text-xs text-gray-600 whitespace-pre-wrap leading-relaxed">
              <p className="mt-3 text-xs text-gray-600 whitespace-pre-wrap leading-relaxed">
                 🤖 AI 回應：{e.output}
              </p>
            </pre>
          </div>
        ))}
      </div>
    </main>
  );
}