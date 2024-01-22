import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./QuickSearch.module.css";

function QuickSearch({
  make,
  setMake,
  model,
  setModel,
  year,
  setYear,
  cars =[],
  setCars,
  onSearch,
  minPrice, 
  setMinPrice,
  maxPrice, 
  setMaxPrice
}) {

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const params = {};
      if (make) params.Make = make;
      if (model) params.Model = model;
      if (year) params.Year = year;
      if (minPrice) params.MinPrice = minPrice;
    if (maxPrice) params.MaxPrice = maxPrice;

      const response = await axios.get("http://localhost:4000/car_inventory", {
        params,
      });

      const filteredCars = response.data.filter(
        (car) =>
          (!make || car.make === make) &&
          (!model || car.model === model) &&
          (!year || car.year.toString() === year)
      );

      setCars(filteredCars);

      navigate("/inventory", {
        state: { make, model, year, minPrice, maxPrice },
      });

      onSearch({ make, model, year, minPrice, maxPrice });

      setYear("");
      setModel("");
      setMake("");
      setMinPrice("");
      setMaxPrice("");
    } catch (error) {
      console.error("There was an error fetching the cars data", error);
    }
  };

  const yearsObj = {};
  const makeObj = {};
  const modelObj = {};

  return (
    <div className={styles.quickSearch_container}>
      <h3 className={styles.title}>Quick Search</h3>
      <div className={styles.input_container}>
      <select
  onChange={(e) => setMake(e.target.value)}
  name="make"
  value={make}
  id="make"
>
  <option value="">Select Make</option>
  {cars
    .filter((car) => {
      if (makeObj[car.make]) {
        return false;
      }
      makeObj[car.make] = true;
      return true;
    })
    .sort((a, b) => a.make.localeCompare(b.make))
    .map((car) => (
      <option key={car.make} value={car.make}>
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
          {cars
                .filter((car) => {
                  if (modelObj[car.model]) {
                    return false;
                  }
                  modelObj[car.model] = true;
                  return true;
                })
                .sort((a, b) => {
                  return a.model.localeCompare(b.model);
                })
                .map((car) => {
                  return <option value={car.model}>{car.model}</option>;
                })}
        </select>

        <select
  onChange={(e) => setYear(e.target.value)}
  name="year"
  value={year}
  id="year"
>
  <option value="">Select Year</option>
  {cars
    .filter((car) => {
      if (yearsObj[car.year]) {
        return false;
      }
      yearsObj[car.year] = true;
      return true;
    })
    .sort((a, b) => {
      return a.year - b.year;
    })
    .map((car) => {
      return <option value={car.year}>{car.year}</option>;
    })}
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
        onClick={() => {
          handleSearch();
          setYear("");
          setModel("");
          setMake("");
          setMinPrice("");
          setMaxPrice("");
        }}
      >
        Find Your Next Car!
      </button>
    </div>
  );
}

export default QuickSearch;
