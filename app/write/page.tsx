"use client";

import { useState } from "react";

export default function WritePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function handleSubmit() {
    const res = await fetch("/api/journal", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">AI Care Journal</h1>

      <p className="mt-2 text-gray-500">
        輸入今天的照護情況，我會幫你整理成情緒與建議
      </p>

      <textarea
        className="w-full mt-6 border p-3 rounded"
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="今天發生了什麼？"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Generate Insight
      </button>

      {output && (
        <div className="mt-6 p-4 bg-gray-50 rounded whitespace-pre-wrap">
          {output}
        </div>
      )}
    </main>
  );
}