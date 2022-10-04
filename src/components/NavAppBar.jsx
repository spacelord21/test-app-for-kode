import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SWITCHES from "../services/switches-variables";
import { setActiveCategoryAction } from "../store/actionCreators/setActiveCategoryAction";

export default function NavAppBar() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);

  return (
    <div className="categories">
      {SWITCHES.items.slice(0, 6).map((item, index) => (
        <div
          className={item.department === category ? "active" : "inactive"}
          key={index}
          onClick={(e) => {
            dispatch(setActiveCategoryAction(item.department));
          }}
        >
          {item.desc}
        </div>
      ))}
    </div>
  );
}
