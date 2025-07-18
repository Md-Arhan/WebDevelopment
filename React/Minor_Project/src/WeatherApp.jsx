import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    // city: "delhi",
    // feelsLike: 299.7,
    // humidity: 73,
    // temp: 299.7,
    // tempMax: 299.7,
    // tempMin: 299.7,
    // weather: "scattered clouds",
  });

  const saveInfo = (info) => {
    setWeather(info);
  };

  return (
    <div>
      <h1>Weather App By A....</h1>
      <SearchBox saveInfo={saveInfo} />
      <InfoBox info={weather} />
    </div>
  );
}
