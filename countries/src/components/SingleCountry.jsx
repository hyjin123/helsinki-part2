import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleCountry = ({ toggleBack, handleBack, country, countriesList }) => {
  const [weather, setWeather] = useState("");
  // save the values of each language in the object so we can map through the array
  const languages = Object.values(country.languages);

  console.log(weather);
  // save the api key from .env file
  const api_key = import.meta.env.VITE_API_KEY;
  const lat = country.latlng[0];
  const lon = country.latlng[1];

  // get the weather data
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country]);

  return (
    <div>
      {toggleBack ? (
        <div>
          <button onClick={handleBack}>back</button>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <h3>Country Name:</h3>
        {country.name.common}
      </div>
      <div>
        <h3>Capital:</h3>
        {country.capital}
      </div>
      <div>
        <h3>Area Code:</h3>
        {country.area}
      </div>
      <div>
        <h3>Languages:</h3>
        <ul>
          {languages.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
      <div style={{ fontSize: 160 }}>{country.flag}</div>
      <div>
        <h3>Weather in {country.capital}</h3>

        {weather && (
          <div>
            <p>temperature {weather.main.temp} Celsius</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <p>wind {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCountry;
