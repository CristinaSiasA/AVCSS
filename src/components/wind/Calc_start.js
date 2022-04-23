import React from "react";
import "./WindCalc.css";

const Calc_start = ({ goToCalc }) => {
  return (
    <div className="calculator-container-1">
      <div className="start-container start-text">
        Wind Savings Calculator
        <br></br>
        <p>
          {" "}
          Estimate the annual electricity savings for domestic or commercial
          wind turbines using this simple calculator. Click start below to
          begin!
          <br></br>
          <button
            className="goto_calc"
            primary="true"
            onClick={() => {
              goToCalc(false);
            }}
          >
            Start
          </button>
        </p>
      </div>
    </div>
  );
};

export default Calc_start;

/*

      */
