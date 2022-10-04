import React from "react";
import { isBirthdayThisYear } from "../services/birthdaySort";
import PersonItem from "./PersonItem";

export default function BirthdayViewComponent({ data }) {
  return (
    <div>
      <div>
        {data
          .filter((item) =>
            isBirthdayThisYear(
              new Date(item.birthday).setFullYear(new Date().getFullYear()),
              new Date()
            )
          )
          .map((item, index) => (
            <PersonItem
              person={item}
              index={index}
              key={index}
              birthday={true}
            />
          ))}
      </div>
      <div>
        <div className="year-line">
          <div className="line"></div>
          <span className="text-line">{new Date().getFullYear() + 1}</span>
          <div className="line"></div>
        </div>
        {data
          .filter(
            (item) =>
              !isBirthdayThisYear(
                new Date(item.birthday).setFullYear(new Date().getFullYear()),
                new Date()
              )
          )
          .map((item, index) => (
            <PersonItem
              person={item}
              index={index}
              key={index}
              birthday={true}
            />
          ))}
      </div>
    </div>
  );
}
