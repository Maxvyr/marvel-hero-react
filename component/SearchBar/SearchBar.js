import React from "react";

export default function SearchBar({ search, onTextInputChange }) {
  const handleSearchText = (e) => {
    onTextInputChange(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search book"
        onChange={handleSearchText}
        value={search}
      />
    </>
  );
}
