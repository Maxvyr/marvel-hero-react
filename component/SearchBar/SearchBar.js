import React from "react";

export default function SearBar({ filterText, onTextInputChange }) {
  const handleFilterText = (e) => {
    onTextInputChange(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search book"
        onChange={handleFilterText}
        value={filterText}
      />
    </>
  );
}
