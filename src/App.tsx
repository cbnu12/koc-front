import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRouts } from "./configs/paths";
import Main from "./pages/Main";
import Map from "./pages/Map";
import "./App.css";
import NotFound from "./pages/NotFound";
import PlaceDetail from "./pages/PlaceDetail";
import ThemeDetail from "./pages/ThemeDetail";
import CourseDetail from "./pages/CourseDetail";
import { QueryClientProvider } from "@tanstack/react-query";
import { getGlobalQueryClient } from "./configs/query";

function App() {
  return (
    <QueryClientProvider client={getGlobalQueryClient()}>
      <Routes>
        <Route path={PageRouts.main} element={<Main />} />
        <Route path={PageRouts.map} element={<Map />} />
        <Route path={PageRouts.themeDetail} element={<ThemeDetail />} />
        <Route path={PageRouts.placeDetail} element={<PlaceDetail />} />
        <Route path={PageRouts.courseDetail} element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
