import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import { useState } from "react";

export default function searchBox({saveInfo}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "d7a1f07415007238b5bfdbb2c20a9879"

  const [city, setCity] = useState("");
  const [error, setError] = useState(false)

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let responsejson = await response.json();
    console.log(responsejson);
    let result = {
      city : city,
      temp : responsejson.main.temp,
      tempMin : responsejson.main.temp_min,
      tempMax : responsejson.main.temp_max,
      humidity : responsejson.main.humidity,
      feelsLike : responsejson.main.feels_like,
      weather : responsejson.weather[0].description
    }
    return result;
    } catch (error) {
      throw error;
    }
    // console.log(result);
  }

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      console.log(info)
      saveInfo(info);
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          onChange={handleChange}
          value={city}
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such Place Exists!</p>}
      </form>
    </div>
  );
}