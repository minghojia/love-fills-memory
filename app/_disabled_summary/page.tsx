import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default async function SummaryPage() {
  const { data } = await supabase
    .from("summaries")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  const s = data?.summary_json;

  return (
    <div className="space-y-4">

      <h1 className="text-lg font-semibold">
        🧠 今日照護摘要
      </h1>

      <div>
        <h2 className="font-medium">📌 事實</h2>
        <p className="text-sm text-gray-600">
          {s?.facts?.join(" / ")}
        </p>
      </div>

      <div>
        <h2 className="font-medium">💬 情緒</h2>
        <p className="text-sm text-gray-600">
          {s?.caregiver_emotion}
        </p>
      </div>

      <div>
        <h2 className="font-medium">🌿 建議</h2>
        <ul className="text-sm text-gray-600 list-disc pl-5">
          {s?.suggestions?.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="p-3 bg-blue-50 rounded-xl text-sm">
        ❤️ {s?.support_sentence}
      </div>

    </div>
  );
}