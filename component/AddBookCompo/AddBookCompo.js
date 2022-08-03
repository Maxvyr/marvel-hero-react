import React from "react";
import Link from "next/link";
import styles from "./AddBook.module.css";

export default function AddBookCompo({}) {
  return (
    <div>
      <Link href="/add-book">
        <a className={styles.main}>+</a>
      </Link>
    </div>
  );
}
