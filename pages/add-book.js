import React from "react";
import styles from "../styles/AddBook.module.css";

export default function AddBook() {
  return (
    <div className={styles.main}>
      <h1>AddBook</h1>
      <input type="text" className={styles.inputBase} placeholder="title" />
      <input type="text" className={styles.inputBase} placeholder="author" />
      <input
        type="text"
        className={styles.inputBase}
        placeholder="description"
      />
      <span>
        Commander ?
        <input type="checkbox" />
      </span>
      <span>
        Lu ?
        <input type="checkbox" />
      </span>
      <button className={styles.button}>Valider</button>
    </div>
  );
}
