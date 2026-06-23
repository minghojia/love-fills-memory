export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          當記憶逐漸消失，愛成為照顧的方式
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          一個 AI 照護陪伴工具，幫助家庭在照顧失智症親人時，獲得清晰、平靜與支持。
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-xl">
            免費開始
          </button>
          <button className="px-6 py-3 border rounded-xl">
            體驗 AI 照護助手
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          ☕ 如果這個計畫對你有幫助，歡迎支持我們
        </p>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            照顧你所愛的人，是一段非常消耗的旅程
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>• 他現在這樣，我該說什麼？</li>
            <li>• 他一直重複同樣的問題，我該怎麼回應？</li>
            <li>• 為什麼我總是這麼累、這麼不確定？</li>
            <li>• 我這樣做，真的對嗎？</li>
          </ul>

          <p className="mt-6 font-medium">
            但你要知道——你並不孤單。
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            你的 AI 照護夥伴
          </h2>

          <p className="text-gray-600 mb-6">
            Love Fills Memory 幫助你在真實照護情境中，提供清晰且溫和的指引。
          </p>

          <div className="grid gap-3 text-gray-700">
            <div>🧠 每日照護計畫</div>
            <div>💬 溫和溝通話術</div>
            <div>🌙 夜間行為支援</div>
            <div>🍽️ 日常作息指引</div>
            <div>💖 照護者情緒支持</div>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            真實情境範例
          </h2>

          <div className="bg-white p-6 rounded-xl border">
            <p className="font-medium mb-2">🌙 夜間混亂</p>

            <p className="text-gray-600 mb-4">
              親人晚上不斷走動、無法入睡
            </p>

            <p className="font-medium">AI 建議：</p>
            <p className="text-gray-600 mt-2">
              降低光線與噪音，溫和引導回床上，保持安靜環境。
            </p>

            <p className="mt-4 font-medium">💬 可以這樣說：</p>
            <p className="text-gray-600">
              「沒事的，你很安全，我在這裡陪你。」
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            從真實照護經驗誕生
          </h2>

          <p className="text-gray-600">
            Love Fills Memory 來自真實的照護生活，那些不確定、疲憊，但依然充滿愛的時刻。
            它不只是一個 AI 工具，而是一個陪伴家庭走過失智症旅程的支持系統。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black text-white">
        <h2 className="text-3xl font-semibold">
          你不需要獨自承擔這一切
        </h2>

        <p className="mt-4 text-gray-300">
          讓 AI 在你需要的時候，給你清晰與支持
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-xl">
            免費開始
          </button>
          <button className="px-6 py-3 border border-white rounded-xl">
            加入早期體驗
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          ☕ Buy me a coffee（之後可以加 link）
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        Love Fills Memory © {new Date().getFullYear()}  
        <br />
        AI 照護陪伴工具
      </footer>

    </main>
  )
}