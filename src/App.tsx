import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRouts } from "./configs/paths";
import Main from "./pages/Main";
import Map from "./pages/Map";
import Theme from "./pages/Theme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PageRouts.main} element={<Main />} />
        <Route path={PageRouts.map} element={<Map />} />
        <Route path={PageRouts.theme} element={<Theme />} />
      </Routes>
    </div>
  );
}

export default App;
