import React from "react";
import { useState } from "react";

import WikiCall from "./WikiCall";

const Solar_edu = (props) => {
  const [data, setData] = useState("");
  const [show, setShow] = useState(true);

  var dataDisp = JSON.stringify(data);

  const dataFill = (apiData) => {
    setData(apiData);
  };

  const hideButton = (shi) => {
    setShow(shi);
  };

  const returnButton = (returnBut) => {
    setShow(returnBut);
  };

  return (
    <div className="links text-format">
      <div>
        {show ? (
          <div>
            <div>
              <WikiCall
                name="Wind"
                apiKey="Wind"
                dataFill={dataFill}
                hideButton={hideButton}
              />
            </div>

            <div>
              <WikiCall
                name="What Are Wind Turbines?"
                apiKey="Wind_turbine"
                dataFill={dataFill}
                hideButton={hideButton}
              />
            </div>
            <div>
              <WikiCall
                name="How Do They Generate Electricity?"
                apiKey="Electromagnetic_induction"
                dataFill={dataFill}
                hideButton={hideButton}
              />
            </div>
          </div>
        ) : (
          <div className="data-style">
            {data}
            <br></br>
            <button className="return-button-style" onClick={returnButton}>
              Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solar_edu;
