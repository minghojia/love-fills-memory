import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-32 text-gray-800">

      {/* Brand */}
      <h1 className="text-5xl font-light tracking-tight mb-10">
        Love Fills Memory
      </h1>

      {/* Core Emotion */}
      <p className="text-2xl text-gray-600 leading-relaxed mb-16">
        當記憶逐漸流失時，<br />
        愛仍然可以被保留。
      </p>

      {/* Story block */}
      <section className="space-y-6 text-gray-700 leading-relaxed mb-20">

        <p>
          我們正在為照顧者打造一個安靜的 AI 工具。
        </p>

        <p>
          它不取代人，也不加速生活，而是幫助人們記住那些正在消失的日常。
        </p>

        <p>
          讓照顧這件事，不再只有壓力，也能留下溫度。
        </p>

      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 my-16" />

      {/* CTA */}
      <div className="mb-24">
        <Link
          href="/the-first-seed"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          閱讀我們的第一顆種子 →
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-400 leading-relaxed">
        Helping families preserve love when memories fade.
      </footer>

    </main>
  );
}