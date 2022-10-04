import React from "react";
import ModalWindow from "./ModalWindow";
import SearchComponent from "./SearchComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleModalWindowAction } from "../store/actionCreators/setActiveSortTypeAction";

export default function TopAppBar() {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.sortTypeReducer.visible);
  const sortType = useSelector((state) => state.sortTypeReducer.sortType);
  const disconnect = useSelector(
    (state) => state.disconnectedReducer.isDisconnected
  );
  const connectionLoading = useSelector(
    (state) => state.disconnectedReducer.disconnectedLoading
  );

  return (
    <div>
      <header
        className={
          disconnect
            ? "offline-header"
            : connectionLoading
            ? "offline-loading-header"
            : ""
        }
      >
        <h3
          className={
            disconnect || connectionLoading ? "finder offline" : "finder"
          }
        >
          Поиск
        </h3>
        {disconnect ? (
          <p className="offline-text">
            Не могу обновить данные. Проверь соединение с интернетом.
          </p>
        ) : connectionLoading ? (
          <p className="offline-text">Секундочку, гружусь...</p>
        ) : (
          <div className="find-area">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faMagnifyingGlass"
            />
            <SearchComponent />
            <FontAwesomeIcon
              icon={faBars}
              className={sortType === "birthday" ? "faBars-active" : "faBars"}
              onClick={() => {
                dispatch(setVisibleModalWindowAction(true));
              }}
            />
            <ModalWindow visible={visible} sortType={sortType} />
          </div>
        )}
      </header>
    </div>
  );
}
