import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./QuickSearch.module.css";

const QuickSearch = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [carListings, setCarListings] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/car_inventory")
      .then(response => {
        setCarListings(response.data);
      })
      .catch(error => {
        console.error("Error get request for car inventory:", error.response.data);
      });
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    try {
      const filteredCars = carListings.filter((car) => (
        (!make || car.make === make) &&
        (!model || car.model === model) &&
        (!year || car.year.toString() === year) &&
        (!minPrice || parseInt(car.price) >= parseInt(minPrice)) &&
        (!maxPrice || parseInt(car.price) <= parseInt(maxPrice))
      ));
      navigate("/inventory", {
        state: { make, model, year, minPrice, maxPrice },
      });
    } catch (error) {
      console.error("There was an error handling the search", error);
    }
  };

  const makeOptions = useMemo(() => (
    carListings.map(car => car.make)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
  ), [carListings]);

  const modelOptions = useMemo(() => (
    carListings.map(car => car.model)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
  ), [carListings]);

  const yearOptions = useMemo(() => (
    carListings.map(car => car.year)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a - b)
  ), [carListings]);

  return (
    <div className={styles.quickSearch_container}>
      <h3 className={styles.title}>Quick Search</h3>
      <div className={styles.input_group}>
        <select
          onChange={(e) => setMake(e.target.value)}
          name="make"
          value={make}
          id="make"
        >
          <option value="">Select Make</option>
          {makeOptions.map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <select
          onChange={(e) => setModel(e.target.value)}
          name="model"
          value={model}
          id="model"
        >
          <option value="">Select Model</option>
          {modelOptions.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select
          onChange={(e) => setYear(e.target.value)}
          name="year"
          value={year}
          id="year"
        >
          <option value="">Select Year</option>
          {yearOptions.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className={styles.input_price}>
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

      <button
        className={styles.search_button}
        onClick={handleSearch}
      >
        Find Your Next Car!
      </button>
    </div>
  );
};

export default QuickSearch;
