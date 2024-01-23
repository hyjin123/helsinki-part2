import React from "react";

const Search = ({ newSearch, handleSearchChange }) => {
  return (
    <div>
      search: <input value={newSearch} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
