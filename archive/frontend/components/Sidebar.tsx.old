import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">

      {/* Logo */}
      <div className="text-xl font-bold mb-10">
        💗 Love Fills Memory
      </div>

      {/* Navigation */}
      <nav className="space-y-3 text-sm">

        <Link
          href="/"
          className="block px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          🏠 Home
        </Link>

        <Link
          href="/write"
          className="block px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          ✍️ Write Memory
        </Link>

        <Link
          href="/memories"
          className="block px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          📚 Memories
        </Link>

        <Link
          href="/settings"
          className="block px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          ⚙️ Settings
        </Link>

      </nav>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-400">
        Private memory journal
      </div>

    </aside>
  );
}