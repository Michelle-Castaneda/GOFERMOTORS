import React, { useState, useEffect } from "react";
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
  const [filteredCars, setFilteredCars] = useState([]);


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
      const filteredCars = carListings.filter(
        (car) =>
          (!make || car.make === make) &&
          (!model || car.model === model) &&
          (!year || car.year.toString() === year) &&
          (!minPrice || parseInt(car.price) >= parseInt(minPrice)) &&
          (!maxPrice || parseInt(car.price) <= parseInt(maxPrice))
      );
      setFilteredCars(filteredCars);

      navigate("/inventory", {
        state: { make, model, year, minPrice, maxPrice },
      });


      setYear("");
      setModel("");
      setMake("");

      setMinPrice("");
      setMaxPrice("");
    } catch (error) {
      console.error("There was an error handling the search", error);
    }
  };

  const yearsObj = {};
  const makeObj = {};
  const modelObj = {};

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
          {carListings
  .filter((car) => {
    if (makeObj[car.make]) {
      return false;
    }
    makeObj[car.make] = true;
    return true;
  })
  .sort((a, b) => a.make.localeCompare(b.make))
  .map((car) => (
    <option key={car.car_id} value={car.make}>
      {car.make}
    </option>
  ))}
        </select>

        <select
  onChange={(e) => setModel(e.target.value)}
  name="model"
  value={model}
  id="model"
>
  <option value="">Select Model</option>
  {carListings
    .filter((car) => {
      if (modelObj[car.model]) {
        return false;
      }
      modelObj[car.model] = true;
      return true;
    })
    .sort((a, b) => a.model.localeCompare(b.model))
    .map((car) => (
      <option key={car.car_id} value={car.model}>
        {car.model}
      </option>
    ))}
</select>


<select
  onChange={(e) => setYear(e.target.value)}
  name="year"
  value={year}
  id="year"
>
  <option value="">Select Year</option>
  {carListings
    .filter((car) => {
      if (yearsObj[car.year]) {
        return false;
      }
      yearsObj[car.year] = true;
      return true;
    })
    .sort((a, b) => a.year - b.year)
    .map((car) => (
      <option key={car.car_id} value={car.year}>
        {car.year}
      </option>
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
        onClick={() => handleSearch()}
      >
        Find Your Next Car!
      </button>
    </div>
  );
}


export default QuickSearch;