import React from "react";

const Country = ({ country, handleShow }) => {
  console.log(country);
  return (
    <div>
      <div>{country.name.common}</div>
      <button onClick={() => handleShow(country)}>show</button>
    </div>
  );
};

export default Country;
