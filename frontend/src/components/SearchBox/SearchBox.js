import React from "react";
import "./SearchBox.styles.scss";

const SearchBox = ({ placeholder, searchField, handleChange }) => (
  <div className="searchBox">
    <input
      type="search"
      placeholder={placeholder}
      // value={searchField}
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;
