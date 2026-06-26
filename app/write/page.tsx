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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();
  return data.result;
}

export default function WritePage() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);

  // load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("journals");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  async function saveEntry() {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const output = await generateAI(input);

      const newEntry: Entry = {
        id: Date.now(),
        input,
        output,
        date: new Date().toISOString(),
      };

      const existing: Entry[] = JSON.parse(
        localStorage.getItem("journals") || "[]"
      );

      const updated = [newEntry, ...existing];

      localStorage.setItem("journals", JSON.stringify(updated));
      setEntries(updated);

      setInput("");
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10 bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">📖 照護日記</h1>
      <p className="text-sm text-gray-500 mb-6">
        記錄照護中的每一天
      </p>

      {/* Input */}
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
            className="mt-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-700 whitespace-pre-wrap leading-relaxed"
          >
            <div className="text-[10px] text-gray-400 mb-2">
              {new Date(e.date).toLocaleString()}
            </div>

            <div className="font-medium text-gray-800 mb-2">
              🧠 {e.input}
            </div>

            <div>🤖 照護回應：{e.output}</div>
          </div>
        ))}
      </div>
    </main>
  );
}