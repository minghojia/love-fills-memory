import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>❤️ LOVE FILLS MEMORY</h1>
      <p className={styles.subtitle}>用愛填滿失去的記憶</p>
    </main>
  );
}


.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
}