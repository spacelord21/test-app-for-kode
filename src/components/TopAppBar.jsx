import React from "react";
import ModalWindow from "./ModalWindow";
import SearchComponent from "./SearchComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

export default function TopAppBar() {
  return (
    <div>
      <header>
        <h3 className="finder">Поиск</h3>
        <div className="find-area">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="faMagnifyingGlass"
          />
          <SearchComponent />
          <FontAwesomeIcon icon={faBars} className="faBars" />
          <ModalWindow />
        </div>
      </header>
    </div>
  );
}
