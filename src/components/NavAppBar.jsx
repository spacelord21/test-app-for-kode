import React from "react";
import SWITCHES from "../services/switches-variables";

export default function NavAppBar() {
  return (
    <div className="categories">
      {SWITCHES.items.slice(0, 6).map((item, index) => (
        <div
          className={item.department === "all" ? "active" : "inactive"}
          key={index}
          onClick={() => {}}
        >
          {item.desc}
        </div>
      ))}
    </div>
  );
}
