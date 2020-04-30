import React from "react";
import SearchBoxStyles from "./SearchBoxStyles.jsx";

const SearchBox = ({ placeholder, searchField, handleChange }) => (
  <SearchBoxStyles className="search-box">
    <input
      type="search"
      placeholder={placeholder}
      // value={searchField}
      onChange={handleChange}
      className="searchBox"
    />
  </SearchBoxStyles>
);

export default SearchBox;
