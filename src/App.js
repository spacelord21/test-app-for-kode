import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataViewComponent from "./components/DataViewComponent";
import NavAppBar from "./components/NavAppBar";
import PersonProfile from "./components/PersonProfile";
import TopAppBar from "./components/TopAppBar";

function App() {
  const data = useSelector((state) => state.dataReducer.data);
  console.log(data);

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
