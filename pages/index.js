import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buku</title>
        <meta
          name="Buku a book reading list with more option"
          content="Buku book reading list"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buku</h1>
        <form method="get" className={styles.grid} action="/library">
          <input className={styles.inputText} type="text" placeholder="Login" />
          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
          />

          <button className={styles.inputBt} type="submit">
            Connexion
          </button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/maxvyr_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>Maxime Vidalinc</span>
        </a>
      </footer>
    </div>
  );
}
