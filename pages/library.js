import React from "react";
import styles from "../styles/Library.module.css";
import NavLateral from "../component/NavLateral/NavLateral";

export default function Library() {
  return (
    <div className={styles.main}>
      <NavLateral />
      <h1>Library</h1>
      <input type="text" placeholder="search book" />

    </div>
  );
}
