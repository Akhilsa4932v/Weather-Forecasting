import SearchBox from './searchBox.jsx';
import InfoBox from './infoBox.jsx';
import { useState } from 'react';

function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Rayagada",
        feels_like:301.32,
        temp:270,
        tempMax:280.1,
        tempMin:279.06,
        humidity:47,
        weather:"smoke",
    })

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>WEATHER FORECAST</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;