import React from "react";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Solar from "./pages/Solar";
import Wind from "./pages/Wind";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Education from "./pages/Education";
import Solar_edu from "./components/education/Solar_edu";
import Wind_edu from "./components/education/Wind_edu";
import "antd/dist/antd.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="solar" element={<Solar />} />
      <Route path="wind" element={<Wind />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="Education" element={<Education />}>
        <Route path="Solar_Education" element={<Solar_edu />} />
        <Route path="Wind_Education" element={<Wind_edu />} />
      </Route>
    </Routes>
  );
}
