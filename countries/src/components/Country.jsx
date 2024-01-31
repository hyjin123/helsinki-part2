import React from "react";

const Country = ({ country, handleShow }) => {
  return (
    <div>
      <div>{country.name.common}</div>
      <button onClick={() => handleShow(country)}>show</button>
    </div>
  );
};

export default Country;
