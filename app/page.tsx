export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>❤️ LOVE FILLS MEMORY</h1>

      <p style={styles.subtitle}>用愛填滿失去的記憶</p>

      <p style={styles.tagline}>
        Where Love Remains When Memory Fades
      </p>

      <p style={styles.author}>
        By 賈銘禾 • Ming-Ho Jia
      </p>

      <button style={styles.button}>
        Read Stories
      </button>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff7f7",
    fontFamily: "serif",
    padding: "20px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#555",
    marginBottom: "20px",
  },
  author: {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#777",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#ff6b6b",
    color: "white",
    cursor: "pointer",
  },
};