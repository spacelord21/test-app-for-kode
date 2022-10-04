import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonItem from "./PersonItem";
import UserService from "../services/UserService";
import {
  setCopyDataAction,
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
import { birthdaySort } from "../services/birthdaySort";
import BirthdayViewComponent from "./BirthdayViewComponent";
import { setConnectionLoadingAction } from "../store/actionCreators/setDisconnectedAction";

export default function DataViewComponent() {
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataReducer.data);
  const loading = useSelector((state) => state.dataReducer.loading);
  const error = useSelector((state) => state.dataReducer.error);
  const copyData = useSelector((state) => state.dataReducer.copyData);

  const category = useSelector((state) => state.categoryReducer.category);

  const query = useSelector((state) => state.queryReducer.query);
  const searchData = useSelector((state) => state.queryReducer.searchData);

  const sortType = useSelector((state) => state.sortTypeReducer.sortType);

  const disconnect = useSelector(
    (state) => state.disconnectedReducer.isDisconnected
  );
  const connectionLoading = useSelector(
    (state) => state.disconnectedReducer.disconnectedLoading
  );

  useEffect(() => {
    UserService.getPersonFromDepartment("all")
      .then((res) => {
        dispatch(setCopyDataAction(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!disconnect) {
      dispatch(setDataStartedAction());
      UserService.getPersonFromDepartment(category)
        .then((res) => {
          dispatch(setDataSucessAction(res.data.items));
          if (connectionLoading) {
            dispatch(setConnectionLoadingAction(false));
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(setDataFailureAction(err));
        });
    } else {
      dispatch(
        setDataSucessAction(
          category === "all"
            ? copyData
            : copyData.filter((item) => item.department === category)
        )
      );
    }
  }, [category, disconnect]);

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ["firstName", "lastName", "userTag"],
      threshold: 0.0,
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
  }, [query, data]);

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
              {sortType === "birthday" ? (
                <BirthdayViewComponent
                  data={
                    searchData.length > 0 && query.length > 0
                      ? searchData
                      : data.sort(birthdaySort)
                  }
                />
              ) : (
                (searchData.length > 0 && query.length > 0
                  ? searchData
                  : data.sort(alphabeticalSort)
                ).map((item, index) => (
                  <PersonItem person={item} key={index} birthday={false} />
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
