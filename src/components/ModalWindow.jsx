import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalWindow() {
  const isVisible = false;

  return isVisible ? (
    <div className="modal-window">
      <FontAwesomeIcon icon={faCircleXmark} id="close" />
      <h2 id="sort">Сортировка</h2>
      <div className="modal-content">
        <div className="radio-input">
          <input
            type="radio"
            id="check-1"
            className="check-radio"
            name="sorting"
            value="alphabetical"
            onChange={(e) => {}}
          />
          <label htmlFor="check-1">По алфавиту</label>
        </div>
        <div className="radio-input">
          <input
            type="radio"
            id="check-2"
            className="check-radio"
            name="sorting"
            value="birthday"
            onChange={(e) => {}}
          />
          <label htmlFor="check-2">По дню рождения</label>
        </div>
      </div>
    </div>
  ) : null;
}
