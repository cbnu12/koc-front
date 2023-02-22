import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRouts } from "./configs/paths";
import Main from "./pages/Main";
import Map from "./pages/Map";
import "./App.css";
import NotFound from "./pages/NotFound";
import PlaceDetail from "./pages/PlaceDetail";
import ThemeDetail from "./pages/ThemeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PageRouts.main} element={<Main />} />
        <Route path={PageRouts.map} element={<Map />} />
        <Route path={PageRouts.themeDetail} element={<ThemeDetail />} />
        <Route path={PageRouts.placeDetail} element={<PlaceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
