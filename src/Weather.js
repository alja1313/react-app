import React from "react";
import axios from "axios";
console.log(axios.isCancel("something"));
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather App! ☁🌡</h2>;
}
