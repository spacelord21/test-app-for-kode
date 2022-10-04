import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataViewComponent from "./components/DataViewComponent";
import NavAppBar from "./components/NavAppBar";
import PersonProfile from "./components/PersonProfile";
import TopAppBar from "./components/TopAppBar";
import { setDisconnectedAction } from "./store/actionCreators/setDisconnectedAction";
import { useEffect } from "react";

function App() {
  const data = useSelector((state) => state.dataReducer.data);

  const dispatch = useDispatch();

  function handleConnectionChange() {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      const webConnection = setInterval(() => {
        fetch("//google.com", { mode: "no-cors" })
          .then(() => {
            dispatch(setDisconnectedAction(false));
            return clearInterval(webConnection);
          })
          .catch(() => {
            dispatch(setDisconnectedAction(true));
          });
      }, 2000);
      return;
    }
    return dispatch(setDisconnectedAction(true));
  }

  useEffect(() => {
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
  });
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
