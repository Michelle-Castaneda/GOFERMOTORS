import React, { useState } from "react";
import styles from "./QuickSearch.module.css";
import SearchBar from "../SearchBar/SearchBar";

function QuickSearch({ onSearch }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");

  const handleSearch = () => {
    onSearch({ make, model, year, bodyStyle });
  };

  return (
    <div className={styles.quickSearch_container}>
      <h3 className={styles.title}>Quick Search</h3>
      <SearchBar
        setMake={setMake}
        make={make}
        setModel={setModel}
        model={model}
        setYear={setYear}
        year={year}
        setBodyStyle={setBodyStyle}
        bodyStyle={bodyStyle}
      />
      <button className={styles.search_button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default QuickSearch;
