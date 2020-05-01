import React from "react";
import SearchBoxStyles from "./SearchBoxStyles.jsx";

const SearchBox = ({ placeholder, searchField, handleChange }) => (
  <SearchBoxStyles id="search-box">
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className="searchBox"
    />
  </SearchBoxStyles>
);

export default SearchBox;
