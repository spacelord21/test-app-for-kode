import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataViewComponent from "./components/DataViewComponent";
import NavAppBar from "./components/NavAppBar";
import TopAppBar from "./components/TopAppBar";
import UserService from "./services/UserService";
import { getDataAction } from "./store/actionCreators/getDataAction";
import { setDataAction } from "./store/actionCreators/setDataAction";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    UserService.getPersonFromDepartment("all")
      .then((res) => {
        dispatch(setDataAction(res.data.items));
      })
      .catch((err) => {
        console.log(err);
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
      </Routes>
    </div>
  );
}

export default App;
