import WeatherDisplay from './WeatheDisplay';
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

        const [weather,setWeather] = useState({temp:0,condition:""});

        useEffect( ()=>{
          const weatherData = {temp:20 ,condition:"Sunny"};
          setWeather(weatherData);
        }, [] )
 

  return (
    <div>
        <h1>Weather is :</h1>
        <WeatherDisplay weather={weather}></WeatherDisplay>
        
    </div>
  )
}

export default App
