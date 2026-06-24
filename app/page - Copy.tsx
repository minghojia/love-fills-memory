export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">

      <div className="max-w-2xl w-full text-center">

        {/* Brand */}
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Love Fills Memory
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A gentle space for families to preserve memories, stories, and care.
          Built for moments that matter when memory fades.
        </p>

        {/* Feature cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="font-semibold text-gray-800">Memory Journal</p>
            <p className="text-sm text-gray-500 mt-1">
              Record daily moments
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="font-semibold text-gray-800">Care Notes</p>
            <p className="text-sm text-gray-500 mt-1">
              Track important details
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <p className="font-semibold text-gray-800">Family Stories</p>
            <p className="text-sm text-gray-500 mt-1">
              Preserve voices & memories
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
            Start Writing Memories
          </button>
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-sm text-gray-400">
          A personal project for caregiving, reflection, and love.
        </p>

      </div>
    </main>
  );
}