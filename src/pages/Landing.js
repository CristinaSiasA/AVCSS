import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "../components/education/Edu.css";

const Landing = () => {
  return (
    <div className="education-container">
      <div className="nav-link-container">
        <div className="edu-solar edu-text">
          <Link
            className="link-style link-style-solar"
            to="/education/Solar_Education"
          >
            SOLAR
          </Link>
        </div>
        <div className="edu-wind edu-text">
          <Link
            className="link-style link-style-wind"
            to="/education/Wind_Education"
          >
            WIND
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Landing;

/*

<Link
          className="link-style link-style-solar"
          to="/education/Solar_Education"
        >
          SOLAR ENERGY
        </Link>
      </div>

      <div className="edu-wind edu-text">
        <Link
          className="link-style link-style-wind"
          to="/education/Wind_Education"
        >
          WIND ENERGY
        </Link>
      </div>

      <Outlet />

*/
