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
    if (isNaN(calc)) calc = 0;

    setPower(calc);
  };

  return (
    <div className="calculator-container-2">
      <div className="userInput-container">
        <div className="userInput-title-container start-text">
          Wind Savings Calculator
          <p>
            {" "}
            Start by finding your current location. You can use this to
            calculate the average windspeed for your area. Choose your blade
            size and calculate your savings!
          </p>
          <button
            className="calc-return-button"
            primary="true"
            onClick={() => {
              button_return(true);
            }}
          >
            x
          </button>
        </div>
        <div className="location-container">
          <button className="location-button" onClick={findPosition}>
            Find Your Location
          </button>{" "}
          <br></br>
          <span>Latitude: {lat} &#176;</span> <br></br>
          <span>Longitude: {lng} &#176;</span>
        </div>
        <div className="wind-container">
          <button className="windspeed-button" onClick={findWindSpeed}>
            Find Wind Speed
          </button>{" "}
          <br></br>
          <span>
            Average Wind Speed: <br></br>
            {finalSpeed} m/s{" "}
          </span>
        </div>
        <div className="blade-container">
          <div className="turbine-bladesize-text">
            Blade Size (m<sup>2)</sup>
          </div>

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
        <div className="saving-container">
          <div className="saving-title-text">Annual Savings</div>
          <div className="saving-value">
            <h3>&#x20AC;{power}</h3>
          </div>
        </div>
        <div className="calculate-button">
          <button className="calculate-savings-button" onClick={findPower}>
            Calculate Savings!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;

/*



    
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

*/
