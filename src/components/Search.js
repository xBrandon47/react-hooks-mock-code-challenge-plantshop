import React from "react";

function Search( {searchValue, onChangeSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onChangeSearch(e.target.value)}
        value= {searchValue}
      />
    </div>
  );
}

export default Search;
