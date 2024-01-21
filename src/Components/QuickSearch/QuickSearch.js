import React, { useState } from "react";
import styles from "./QuickSearch.module.css";

function QuickSearch({ onSearch }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    // You can customize this logic based on your needs
    // For simplicity, I'm just passing the search criteria to the onSearch callback
    onSearch({ make, model, year, minPrice, maxPrice });
  };

  return (
    <div className={styles.quickSearch_container}>
      <h3 className={styles.title}>Quick Search</h3>
      <div className={styles.input_container}>
        <input
        className={styles.input_make}
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <input
        className={styles.input_model}
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
        className={styles.input_year}
        type="number"
        placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        >
        </input>
        </div>


<div className={styles.input_price}
>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <div className={styles.QuickSearch_To}>To</div>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <button className={styles.search_button} onClick={handleSearch}>
        Find Your Next Car!
      </button>
    </div>
  );
}

export default QuickSearch;
