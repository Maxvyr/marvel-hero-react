import React from "react";
import NavLateral from "../component/nav-lateral/nav-lateral";
import styles from "../styles/Reading-book.module.css";

export default function ReadingBook() {
  return (
    <div className={styles.main}>
      <NavLateral />
      <h1>ReadingBook</h1>
    </div>
  );
}
