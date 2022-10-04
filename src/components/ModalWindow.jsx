import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  setActiveSortTypeAction,
  setVisibleModalWindowAction,
} from "../store/actionCreators/setActiveSortTypeAction";

export default function ModalWindow({ visible, sortType }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setVisibleModalWindowAction(false));
    dispatch(setActiveSortTypeAction(e.target.value));
  };

  return visible ? (
    <div className={visible ? "modal active" : "modal"}>
      <div className="modal-content">
        <div className="modal-header">
          <span>
            <FontAwesomeIcon
              icon={faCircleXmark}
              id="close"
              onClick={() => {
                dispatch(setVisibleModalWindowAction(false));
              }}
            />
            <h2 id="sort">Сортировка</h2>
          </span>
        </div>

        <div className="radio-input">
          <input
            type="radio"
            id="check-1"
            className="check-radio"
            name="sorting"
            value="alphabetical"
            onChange={(e) => {
              handleChange(e);
            }}
            checked={sortType === "alphabetical" ? true : false}
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
            onChange={(e) => {
              handleChange(e);
            }}
            checked={sortType === "birthday" ? true : false}
          />
          <label htmlFor="check-2">По дню рождения</label>
        </div>
      </div>
    </div>
  ) : null;
}
