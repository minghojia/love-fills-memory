import { CSSProperties } from "react";

export default function Home() {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#fff",
      fontFamily: "Arial",
      padding: "20px",
    } as CSSProperties,

    title: {
      fontSize: "2rem",
      fontWeight: "bold",
    } as CSSProperties,

    subtitle: {
      fontSize: "1.2rem",
      marginTop: "10px",
    } as CSSProperties,
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>❤️ LOVE FILLS MEMORY</h1>
      <p style={styles.subtitle}>用愛填滿失去的記憶</p>
    </main>
  );
}