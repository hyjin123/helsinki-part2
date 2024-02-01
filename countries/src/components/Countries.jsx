import React from "react";
import Country from "./Country";
import SingleCountry from "./SingleCountry";

const Countries = ({ countriesList, handleShow, handleBack, toggleBack }) => {
  const country = countriesList[0];

  if (countriesList.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesList.length === 1) {
    return (
      <SingleCountry
        country={country}
        countriesList={countriesList}
        handleBack={handleBack}
        toggleBack={toggleBack}
      />
    );
  } else {
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
