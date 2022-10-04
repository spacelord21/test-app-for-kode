import React from "react";
import spaceship from "../templates/images/spaceship.png";

export default function ErrorScreen() {
  return (
    <div className="error-page">
      <img src={spaceship} id="spaceship-image"></img>
      <p id="error-text-1">Какой-то сверхразум все сломал</p>
      <p id="error-text-2">Постараемся быстро починить</p>
      <p
        id="error-text-3"
        onClick={() => {
          window.location.reload();
        }}
      >
        Попробовать снова
      </p>
    </div>
  );
}
