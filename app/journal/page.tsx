"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Journal = {
  id: string;
  input: string;
  output: string;
  created_at: string;
};

export default function JournalPage() {
  const [items, setItems] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournal();
  }, []);

  async function fetchJournal() {
    setLoading(true);

    const { data, error } = await supabase
      .from("journals")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setItems(data);
    }

    setLoading(false);

    console.log("DATA:", data);
    console.log("ERROR:", error);
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">
        📖 Care Journal Timeline
      </h1>

      {loading && <p className="text-gray-400">Loading...</p>}

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <p className="text-xs text-gray-400 mb-2">
              {new Date(item.created_at).toLocaleString()}
            </p>

            <p className="font-medium text-sm mb-2">
              🧠 {item.input}
            </p>

            <p className="text-gray-600 text-sm whitespace-pre-wrap">
              {item.output}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}