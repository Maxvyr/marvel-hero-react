import React from "react";
import Link from "next/link";
import styles from "./Button-lateral.module.css";


export default function ButtonLateral({ name, link }) {
  return (
    <div className={styles.button}>
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
}
