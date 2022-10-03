import React from "react";

export default function SearchComponent() {
  return (
    <div className="search">
      <input
        className="main-input"
        type="text"
        placeholder="Введите имя, тег, департамент..."
      ></input>
    </div>
  );
}
