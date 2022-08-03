import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ search, onTextInputChange }) {
  const handleSearchText = (e) => {
    onTextInputChange(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.main}
        type="text"
        placeholder="Search book"
        onChange={handleSearchText}
        value={search}
      />
    </div>
  );
}
