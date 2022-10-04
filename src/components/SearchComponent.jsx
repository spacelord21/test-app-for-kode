import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQueryAction } from "../store/actionCreators/setQueryAction";

export default function SearchComponent() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.queryReducer.query);
  const [value, setValue] = useState(query);

  const handleEndPrinting = () => {
    setTimeout(() => {
      dispatch(setSearchQueryAction(value));
    }, 1000);
  };

  return (
    <div className="search">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="main-input"
        type="text"
        placeholder="Введите имя, тег, департамент..."
        onKeyUp={() => {
          handleEndPrinting();
        }}
      ></input>
    </div>
  );
}
