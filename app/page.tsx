import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>A memory care story</p>

        <h1 className={styles.title}>
          Love fills memory
        </h1>

        <p className={styles.subtitle}>
          用愛填滿失去的記憶
        </p>

        <p className={styles.description}>
          A calm space for remembering, caring, and preserving the moments that matter.
        </p>

        <div className={styles.buttons}>
          <a className={styles.primaryButton} href="#">
            Get Started
          </a>

          <a className={styles.secondaryButton} href="#">
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}