import React from "react";

const Countries = ({ countriesList }) => {
  const country = countriesList[0];

  if (countriesList.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesList.length === 1) {
    // save the values of each language in the object so we can map through the array
    const languages = Object.values(country.languages);
    return (
      <div>
        <div>
          <h3>Capital:</h3>
          {country.capital}
        </div>
        <div>
          <h3>Area Code:</h3>
          {country.area}
        </div>
        <div>
          <h3>languages:</h3>
          <ul>
            {languages.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </div>
        <div style={{ fontSize: 160 }}>{country.flag}</div>
      </div>
    );
  } else {
    const countries = countriesList.map((country) => country.name.common);
    console.log(countries);
    return (
      <div>
        {countries.map((country) => (
          <div key={country}>{country}</div>
        ))}
      </div>
    );
  }
};

export default Countries;
