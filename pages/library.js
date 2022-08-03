import React, { useState } from "react";
import styles from "../styles/Library.module.css";
import SearchBar from "../component/SearchBar/SearchBar";
import AddBookCompo from "../component/AddBookCompo/AddBookCompo";
import BookCompo from "../component/BooksCompo/BooksCompo";

export default function Library() {
  const [search, setSearch] = useState("");

  const onInputTextChange = (val) => {
    console.log(val);
    setSearch(val);
  };

  return (
    <div className={styles.main}>
      <div className={styles.bodyLibrary}>
        <h1>Library</h1>
        <SearchBar search={search} onTextInputChange={onInputTextChange} />
        <div className={styles.listBook}>
          <BookCompo />
          <AddBookCompo />
        </div>
      </div>
    </div>
  );
}
