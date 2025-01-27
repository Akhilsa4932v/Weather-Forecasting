import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './searchBox.css';


function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "16e01f1ad7ba49e02e15fdc1e53e0e8b";

    let getWeatherInfo = async() =>{

        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                humidity:jsonResponse.main.humidity,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description  

            }
            // console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    
   }

    let handleChange = (eve)=>{
        setCity(eve.target.value);
    };

    let handleSubmit = async (eve)=>{
        try{
            eve.preventDefault();
            console.log(city);
            setCity("");
           let newinfo = await getWeatherInfo();
           updateInfo(newinfo);
        }
        catch(err){
           setError(true);

        }
       
    };

    <TextField id="filled-basic" label="Filled" variant="filled" />


    return(
       <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="filled-basic"
                label="City Name" 
                variant="filled" 
                required 
                value={city}
                onChange={handleChange}
                
                /> 
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                Send
               </Button>
            {error && <p>No such place Exists!</p>}
            </form>
       </div>
    );
}

export default SearchBox;