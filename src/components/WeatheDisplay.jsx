import React from "react";

const WeatherDisplay =({weather})=>{

    const {temp,condition} = weather;
    const tempStyle = {
        color : temp > 20 ? "red" : "blue",
        fontWeight : "bold" ,
        fontSize: "24px", 
    }

return(
    <div>
         Temperature : <p style={tempStyle}> {temp} </p>
          Condition : <p> {condition} </p>
     </div>
)
}

export default WeatherDisplay ;