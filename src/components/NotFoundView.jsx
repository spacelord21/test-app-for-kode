import React from "react";
import search from "../templates/images/search-glass.png";

export default function NotFoundView() {
  return (
    <div>
      <div className="empty-search-page">
        <img src={search} id="search-image"></img>
        <p id="error-text-1">Мы никого не нашли</p>
        <p id="error-text-2">Попробуй скорректировать запрос</p>
      </div>
    </div>
  );
}
