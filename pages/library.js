import React from "react";
import styles from "../styles/Library.module.css";
import NavLateral from "../component/nav_lateral";

export default function Library() {
  return (
    <div className={styles.main}>
      <NavLateral />
      <h1>Library</h1>
    </div>
  );
}
