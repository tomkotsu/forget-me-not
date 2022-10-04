// import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Upload from "./Upload";
import YourGarden from "./YourGarden";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/garden" element={<YourGarden />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
