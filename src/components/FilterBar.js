
import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Szukaj produktów..."
        className="filter-input"
      />
      <button className="filter-button">Filtruj</button>
    </div>
  );
};

export default FilterBar;
