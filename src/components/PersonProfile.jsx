import React from "react";
import { getAge, getDescription, numberValueReduced } from "../services/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function PersonProfile({ person, index }) {
  return (
    <div>
      <div className="person-header">
        <Link to="/" className="link two">
          <FontAwesomeIcon icon={faChevronLeft} id="button-back" />
        </Link>
        <img src={person.avatarUrl} className="person-image"></img>
        <div className="person-data">
          <span className="person-data-name">
            {person.firstName} {person.lastName}
          </span>
          <span className="person-data-tag">{person.userTag}</span>
        </div>
        <div className="person-data-position">
          <span>
            {getDescription(person.department)}{" "}
            {person.position === "Team Lead" ? person.position : ""}
          </span>
        </div>
      </div>
      <div className="person-body">
        <div className="person-birthday">
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span className="person-data-text">
              {new Date(person.birthday)
                .toLocaleString("ru", {
                  month: "long",
                  year: "numeric",
                  day: "numeric",
                })
                .replace("г.", "")}
            </span>
          </div>
          <span className="personcard-age">
            {getAge(person.birthday).toString()}
          </span>
        </div>
        <div className="person-phone">
          <FontAwesomeIcon icon={faPhone} />
          <span className="person-data-text">
            <a
              className="link two"
              href={`tel:${numberValueReduced(person.phone)}`}
            >
              {numberValueReduced(person.phone)}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
