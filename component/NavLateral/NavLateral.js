import React from "react";
import ButtonLateral from "../ButtonLateral/ButtonLateral";
import Gap from "../Gaps/Gaps";
import styles from "./NavLateral.module.css";

export default function NavLateral() {
  return (
    <div className={styles.main}>
      <h2 className={styles.titleNavBar}>Buku</h2>
      <Gap />
      <ButtonLateral name="Library" link="/library" />
      <ButtonLateral name="Reading" link="/reading-book" />
      <ButtonLateral name="Wait List" link="/wait-list" />
    </div>
  );
}
