export default function Home() {
  return (
    <main className="bg-[#fafafa] text-[#1d1d1f]">

      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-medium tracking-tight">
          Love Fills Memory
        </div>

        <div className="text-sm text-gray-500">
          Support ☕
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          當記憶逐漸消失，<br />愛成為照顧的方式
        </h1>

        <p className="mt-8 text-lg text-gray-500 leading-relaxed">
          AI 照護陪伴工具，幫助家庭在失智症照護旅程中，獲得清晰、平靜與支持。
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm">
            免費開始
          </button>

          <button className="px-6 py-3 rounded-full border text-sm">
            體驗 AI 照護助手
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          ☕ 如果這個計畫對你有幫助，歡迎支持
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            照顧你所愛的人，是一段非常消耗的旅程
          </h2>

          <div className="mt-10 space-y-4 text-gray-500 leading-relaxed">
            <p>• 他現在這樣，我該說什麼？</p>
            <p>• 他一直重複同樣的問題，我該怎麼回應？</p>
            <p>• 為什麼我總是這麼累、這麼不確定？</p>
            <p>• 我這樣做，真的對嗎？</p>
          </div>

          <p className="mt-10 text-gray-900 font-medium">
            但你要知道，你並不孤單。
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            你的 AI 照護夥伴
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Love Fills Memory 在真實照護情境中，提供清晰、溫和的指引。
          </p>

          <div className="mt-12 grid gap-4 text-left">
            {[
              "🧠 每日照護計畫",
              "💬 溫和溝通話術",
              "🌙 夜間行為支援",
              "🍽️ 日常作息指引",
              "💖 照護者情緒支持"
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-2xl px-5 py-4 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            真實情境範例
          </h2>

          <div className="mt-12 rounded-3xl border bg-[#fbfbfd] p-8 shadow-sm">
            <p className="font-medium">🌙 夜間混亂</p>

            <p className="mt-3 text-gray-500">
              親人晚上不斷走動、無法入睡
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <span className="font-medium">AI 建議：</span><br />
                降低光線與噪音，溫和引導回床上。
              </p>

              <p>
                <span className="font-medium">💬 建議說法：</span><br />
                「沒事的，你很安全，我在這裡陪你。」
              </p>

              <p>
                <span className="font-medium">⚠️ 避免：</span><br />
                爭論、提高音量、強制行為
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            從真實照護經驗誕生
          </h2>

          <p className="mt-8 text-gray-500 leading-relaxed">
            Love Fills Memory 來自真實照護生活。
            那些不確定、疲憊，但依然充滿愛的時刻。
          </p>

          <p className="mt-6 text-gray-700">
            它不是工具，而是一個陪伴家庭的支持系統。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold tracking-tight">
          你不需要獨自承擔這一切
        </h2>

        <p className="mt-6 text-gray-300">
          讓 AI 在你需要的時候，給你清晰與支持
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm">
            免費開始
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-sm">
            加入早期體驗
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          ☕ Buy me a coffee
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-xs text-gray-400">
        Love Fills Memory © {new Date().getFullYear()}
        <br />
        AI 照護陪伴工具
      </footer>

    </main>
  );
}