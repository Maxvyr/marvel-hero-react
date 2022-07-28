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
        <form action="get" className={styles.grid}>
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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
