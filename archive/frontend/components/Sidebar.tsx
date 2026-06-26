export default function Sidebar() {
  return (
    <div
      style={{
        width: 240,
        background: "#111827",
        color: "white",
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 18, marginBottom: 20 }}>
        🧠 Love Fills Memory
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Memories
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          AI Insights
        </a>
      </nav>
    </div>
  );
}