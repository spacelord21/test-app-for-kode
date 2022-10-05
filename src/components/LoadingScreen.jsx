import React from "react";

export default function LoadingScreen() {
  return (
    <div>
      {[...Array(6)].map((index) => (
        <div key={index} className="loading">
          <div className="photo"></div>
          <div className="info">
            <div className="name"></div>
            <div className="department"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
