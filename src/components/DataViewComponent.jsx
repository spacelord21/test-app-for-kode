import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonItem from "./PersonItem";
import { setCopyDataAction } from "../store/actionCreators/setDataAction";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import Fuse from "fuse.js";
import { setSearchDataAction } from "../store/actionCreators/setQueryAction";
import NotFoundView from "./NotFoundView";
import { alphabeticalSort } from "../services/alphabeticalSort";
import { birthdaySort } from "../services/birthdaySort";
import BirthdayViewComponent from "./BirthdayViewComponent";
import { useGetUsersQuery } from "../services/usersApi";

export default function DataViewComponent({ copyData }) {
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);
  const query = useSelector((state) => state.queryReducer.query);
  const searchData = useSelector((state) => state.queryReducer.searchData);
  const sortType = useSelector((state) => state.sortTypeReducer.sortType);
  const disconnect = useSelector(
    (state) => state.disconnectedReducer.isDisconnected
  );
  var { data, isLoading, error, isFetching } = useGetUsersQuery(category, {
    skip: disconnect,
  });

  useEffect(() => {
    if (!isLoading) dispatch(setCopyDataAction(data));
  }, [isLoading]);

  useEffect(() => {
    if (query === "undefined") return;
    if (!isFetching && !disconnect) {
      const fuse = new Fuse(data, {
        keys: ["firstName", "lastName", "userTag"],
        threshold: 0.0,
      });
      console.log(query);
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
    }
    return;
  }, [query, isFetching]);

  if (isLoading || isFetching) {
    return <LoadingScreen />;
  }
  if (error) {
    return <ErrorScreen />;
  }
  if (notFound) return <NotFoundView />;

  return (
    <div>
      {sortType === "birthday" ? (
        <BirthdayViewComponent
          data={
            searchData.length > 0 && query.length > 0
              ? searchData
              : [...data].sort(birthdaySort)
          }
        />
      ) : disconnect ? (
        [...copyData]
          .sort(alphabeticalSort)
          .filter((item) =>
            category === "all" ? item : item.department === category
          )
          .map((item, index) => (
            <PersonItem person={item} key={index} birthday={false} />
          ))
      ) : (
        (searchData.length > 0 && query.length > 0
          ? searchData
          : [...data].sort(alphabeticalSort)
        ).map((item, index) => (
          <PersonItem person={item} key={index} birthday={false} />
        ))
      )}
    </div>
  );
}
