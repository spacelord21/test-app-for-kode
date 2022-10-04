import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonItem from "./PersonItem";
import UserService from "../services/UserService";
import {
  setDataFailureAction,
  setDataStartedAction,
  setDataSucessAction,
} from "../store/actionCreators/setDataAction";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import Fuse from "fuse.js";
import { setSearchDataAction } from "../store/actionCreators/setQueryAction";
import NotFoundView from "./NotFoundView";
import { alphabeticalSort } from "../services/alphabeticalSort";
import { birthdaySort, isBirthdayThisYear } from "../services/birthdaySort";

export default function DataViewComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer.data);
  const category = useSelector((state) => state.categoryReducer.category);
  const loading = useSelector((state) => state.dataReducer.loading);
  const error = useSelector((state) => state.dataReducer.error);
  const query = useSelector((state) => state.queryReducer.query);
  const searchData = useSelector((state) => state.queryReducer.searchData);
  const [notFound, setNotFound] = useState(false);
  const sortType = useSelector((state) => state.sortTypeReducer.sortType);

  useEffect(() => {
    dispatch(setDataStartedAction());
    UserService.getPersonFromDepartment(category)
      .then((res) => {
        dispatch(setDataSucessAction(res.data.items));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setDataFailureAction(err));
      });
  }, [category]);

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ["firstName", "lastName", "userTag"],
      threshold: 0.2,
    });
    const result = fuse.search(query);
    const matches = [];
    if (!result.length && query.length !== 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
      result.forEach((person) => {
        matches.push(person.item);
      });
      dispatch(setSearchDataAction(matches));
    }
  }, [query]);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : error ? (
        <ErrorScreen />
      ) : (
        <div>
          {notFound ? (
            <NotFoundView />
          ) : (
            <div>
              {(searchData.length > 0 && query.length > 0
                ? searchData
                : data.sort(
                    sortType === "alphabetical"
                      ? alphabeticalSort
                      : birthdaySort
                  )
              ).map((item, index) => (
                <PersonItem
                  person={item}
                  key={index}
                  birthday={sortType === "birthday"}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
