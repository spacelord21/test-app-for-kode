import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataViewComponent from "./components/DataViewComponent";
import NavAppBar from "./components/NavAppBar";
import PersonProfile from "./components/PersonProfile";
import TopAppBar from "./components/TopAppBar";
import {
  onOffline,
  onOnline,
  setConnectionLoadingAction,
  setDisconnectedAction,
} from "./store/actionCreators/setDisconnectedAction";
import { useEffect } from "react";
import { useGetUsersQuery } from "./services/usersApi";

function App() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);
  const { data = [] } = useGetUsersQuery(category);

  useEffect(() => {
    window.addEventListener("online", () => {
      dispatch(onOnline());
      dispatch(setDisconnectedAction(false));
      dispatch(setConnectionLoadingAction(true));
    });
    window.addEventListener("offline", () => {
      dispatch(onOffline());
      dispatch(setDisconnectedAction(true));
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={[
            <TopAppBar key={1} />,
            <NavAppBar key={2} />,
            <DataViewComponent key={3} />,
          ]}
        />
        {data.map((item, index) => (
          <Route
            key={index}
            path={`/${item.firstName.toLowerCase()}-${item.lastName.toLowerCase()}`}
            element={<PersonProfile person={item} key={index} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
