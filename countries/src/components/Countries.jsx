import React from "react";
import Country from "./Country";

const Countries = ({ countriesList, handleShow, handleBack }) => {
  const country = countriesList[0];

  if (countriesList.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesList.length === 1) {
    // save the values of each language in the object so we can map through the array
    const languages = Object.values(country.languages);
    return (
      <div>
        <div>
          <button onClick={handleBack}>back</button>
        </div>
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
      </div>
    );
  } else {
    console.log(countriesList);
    return (
      <div>
        {countriesList.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleShow={handleShow}
          />
        ))}
      </div>
    );
  }
};

export default Countries;
