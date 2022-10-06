import React from "react";
import { Link } from "react-router-dom";
import { getDescription } from "../services/utils";

export default function PersonItem({ person, index, birthday }) {
  return (
    <div>
      <Link
        className="link"
        to={`/${person.firstName.toLowerCase()}-${person.lastName.toLowerCase()}`}
      >
        <div key={index} className="person-item">
          <div className="photo">
            <img src={person.avatarUrl}></img>
          </div>
          <div className="info">
            <div className="person-info">
              <span className="first-name">
                {person.firstName} {person.lastName}
              </span>
              <span className="user-tag"> {person.userTag}</span>
            </div>
            <div className="person-position">
              {getDescription(person.department)}{" "}
              {person.position === "Team Lead" ? person.position : ""}
            </div>
            <span className="mainpage-birthday">
              {birthday
                ? new Date(person.birthday)
                    .toLocaleString("ru", {
                      day: "2-digit",
                      month: "short",
                    })
                    .replace(".", "")
                : null}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
