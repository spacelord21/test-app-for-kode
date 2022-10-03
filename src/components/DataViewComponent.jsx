import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonItem from "./PersonItem";

export default function DataViewComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  return (
    <div>
      {data.map((item, index) => (
        <PersonItem person={item} key={index} birthday={false} />
      ))}
    </div>
  );
}
