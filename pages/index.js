import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

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
        <h1 className={styles.title}>Marvel</h1>
        <Button variant="contained" href="/search">
          Search Page
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/maxvyr_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Maxime Vidalinc
        </a>
      </footer>
    </div>
  );
}
