import React from "react";

const SearchBox = ({ placeholder, searchField, handleChange }) => (
  <form>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      // value={searchField}
      onChange={handleChange}
    />
  </form>
);

export default SearchBox;
