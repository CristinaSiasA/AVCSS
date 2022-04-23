import React from "react";
import "./WindCalc.css";

const Calc_start = ({ goToCalc }) => {
  return (
    <div>
      <div className="calculator-container">
        <div className="img-div">
          <div className="description-position">
            <h3 className="calculator-description"> TEST!</h3>

            <button
              className="goto_calc"
              primary="true"
              onClick={() => {
                goToCalc(false);
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc_start;
