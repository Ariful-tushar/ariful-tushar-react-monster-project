import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ place, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={place}
    onChange={handleChange}
  />
);
