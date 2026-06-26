"use client";

import { useState } from "react";

type Entry = {
  id: string;
  text: string;
  createdAt: number;
};

export default function Page() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);

  async function saveEntry() {
    if (!text.trim()) return;

    const res = await fetch("/api/entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    setEntries((prev) => [data.entry, ...prev]);
    setText("");
  }

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>

      {/* NAVIGATION (safe inside return) */}
      <nav style={{ marginBottom: 20 }}>
        <a href="/write" style={{ marginRight: 10 }}>Write</a>
        <a href="/journal">Timeline</a>
      </nav>

      <h2>How is your loved one today?</h2>

      <div style={{
        marginTop: 20,
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 12
      }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a care moment..."
          style={{
            width: "100%",
            minHeight: 80,
            border: "none",
            outline: "none",
            resize: "none"
          }}
        />

        <button onClick={saveEntry} style={{ marginTop: 10 }}>
          Save memory
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Recent</h3>

        {entries.map((e) => (
          <div key={e.id} style={{ padding: 10, borderBottom: "1px solid #eee" }}>
            <div>{e.text}</div>
            <small>{new Date(e.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>

    </main>
  );
}