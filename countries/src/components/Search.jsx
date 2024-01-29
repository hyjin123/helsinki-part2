import React from "react";

const Search = ({ search, onChange }) => {
  return (
    <div>
      Find countries
      <input value={search} onChange={onChange} />
    </div>
  );
};

export default Search;
