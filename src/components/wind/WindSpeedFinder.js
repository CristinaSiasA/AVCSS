import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const WindSpeedFinder = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [finalSpeed, setFinalSpeed] = useState("");

  const API = {
    link: "https://api.openweathermap.org/data/2.5/weather?lat=",
    key: "&appid=749d7d75a5b2f8f2ef03870866a36cca",
  };

  const findPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude.toFixed(4));
      setLng(position.coords.longitude.toFixed(4));
    });
  };

  const findWindSpeed = async () => {
    const { data } = await axios.get(API.link + lat + "&lon=" + lng + API.key);
    setWindSpeed(data);
    let vari = windSpeed?.wind.speed;
    setFinalSpeed(vari);
  };
  return {
    findPosition,
    findWindSpeed,
    lat,
    lng,
    finalSpeed,
  };
};

export default WindSpeedFinder;
