import React from "react";
import NavLateral from "../component/nav-lateral/nav-lateral";
import styles from "../styles/Need-to-read.module.css";

export default function WaitList() {
  return (
    <div className={styles.main}>
      <NavLateral />
      <h1>WaitList</h1>
    </div>
  );
}
