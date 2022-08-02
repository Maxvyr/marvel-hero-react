import React, { useState } from "react";
import styles from "../styles/Library.module.css";
import NavLateral from "../component/NavLateral/NavLateral";
import SearchBar from "../component/SearchBar/SearchBar";
import AddBook from "../component/AddBook/AddBook";
import BookCompo from "../component/BooksCompo/BooksCompo";

export default function Library() {
  const [search, setSearch] = useState("");

  const onInputTextChange = (val) => {
    console.log(val);
    setSearch(val);
  };

  return (
    <div className={styles.main}>
      <NavLateral />
      <div className={styles.bodyLibrary}>
        <h1>Library</h1>
        <SearchBar search={search} onTextInputChange={onInputTextChange} />
        <div className={styles.listBook}>
          <BookCompo />
          <AddBook />
        </div>
      </div>
    </div>
  );
}
