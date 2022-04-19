import "./WindCalc.css";
import React from "react";
import { useState } from "react";
import WindSpeedFinder from "./WindSpeedFinder";

const UserInput = ({ button_return }) => {
  const { findPosition, findWindSpeed, lat, lng, finalSpeed } =
    WindSpeedFinder();
  const [power, setPower] = useState(null);
  const [bladeRad, setBladeRad] = useState();

  const findPower = (e) => {
    e.preventDefault();
    let calc = (
      (3.14 / 2) *
      bladeRad ** 2 *
      finalSpeed ** 3 *
      1.225 *
      0.4 *
      24 *
      0.3 *
      0.25
    ).toFixed(2);

    setPower(calc);
  };

  return (
    <div className="calculator-container-2">
      <div className="left-side-box-location">
        <div className="left-side-box-text">
          <button className="left-side-box-button" onClick={findPosition}>
            Find Your Location
          </button>{" "}
          <br></br>
          <span>Latitude: {lat}</span> <br></br>
          <span>Longitude: {lng}</span>
        </div>
      </div>

      <div className="right-side-box-savings">
        <div className="right-side-box-text">
          <button
            className="calc-return-button"
            primary="true"
            onClick={() => {
              button_return(true);
            }}
          >
            X
          </button>
          <button className="right-side-box-button" onClick={findPower}>
            Calculate Savings!
          </button>
          <h2>{power}</h2>
        </div>
      </div>

      <div className="left-side-box-wind">
        <div className="left-side-box-text">
          <button className="left-side-box-button" onClick={findWindSpeed}>
            Find Wind Speed
          </button>{" "}
          <br></br>
          <span>Wind Speed: {finalSpeed}</span>
        </div>
      </div>

      <div className="left-side-box-blade">
        <div className="left-side-box-text">
          <h3>Blade Size</h3>
          <form>
            <input
              className="form-inputs"
              type="text"
              required
              value={bladeRad}
              placeholder="Enter Size Here"
              onChange={(e) => setBladeRad(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </div>

    /* This section here is for the intial landing page of the calculator
        <div className="position-coord">
        <button className="goto_calc">Start</button>
        <h3 className="calculator-description">
          Find out how much you can save with our wind energy calculator!
        </h3>
      </div>
    </div>



  <div className="wind-speed">
        <button className="button-wind" onClick={findWindSpeed}>
          Find Average Wind Speed for Your Area!
        </button>
        <h3>{finalSpeed}</h3>
      </div>

      <div className="blade-size">
        <form>
          <input
            className="form-inputs"
            type="text"
            required
            value={bladeRad}
            placeholder="Enter desired blade size here"
            onChange={(e) => setBladeRad(e.target.value)}
          ></input>
          <h3>Enter your Preferred Blade Size</h3>
        </form>
        <button className="button-power" type="submit" onClick={findPower}>
          Calculate My Saving!
        </button>
      </div>






      <button onClick={findWindSpeed}>Find my Average Wind Speed</button>
      <h2>This is your average windspeed: {finalSpeed}</h2>
      <form>
        <h2>Choose your blade size </h2>

        <input
          type="text"
          required
          value={bladeRad}
          placeholder="Enter desired blade size here"
          onChange={(e) => setBladeRad(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={findPower}>
          Calculate My Saving!
        </button>
        <h2>This is your saved power: {power}</h2>
      </form>
    </div>
    */
  );
};

export default UserInput;
