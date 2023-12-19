import React, { useState, useContext } from "react";
import { Formik } from "formik";
import styles from "../Inventory/Inventory.module.css";
import axios from "axios";
import AuthContext from "../../store/authContext";
import image from "../../assets/coming_soon.jpeg";

const AddInventoryForms = ({ closeModal, getCars, cars }) => {
  const { state, dispatch } = useContext(AuthContext);
  const [inventory, setInventory] = useState([]);
  const [showTable, setShowTable] = useState(false);
  
  // const [makeLi, setMakeLi] = useState("");
  // const [modelLi, setModelLi] = useState("");
  // const [priceLi, setPriceLi] = useState("");
  // const [yearLi, setYearLi] = useState("");
  // const [downPaymentLi, setDownPaymentLi] = useState("");
  // const [descriptionLi, setDescriptionLi] = useState("");
  // const [soldLi, setSoldLi] = useState("");
  // const [milesLi, setMilesLi] = useState("");
  // const [imageUrlLi, setImageUrlLi] = useState("");

  const [error, setError] = useState("");

  const initialValues = {
    make: "",
    model: "",
    sticker_price: "",
    year: "",
    description: "",
    sold: false,
    mileage: "",
    color: "",
    interior_color: "", 
    body_type: "", 
    title: "", 
    engine: "", 
    vin_number: "", 
    stock_number: "",
    image_url: "",
  };

  const onSubmit = (values, {resetForm}) => {
    const addCar = () => {
      const newCar = {
        make: values.make,
        model: values.model,
        sticker_price: values.sticker_price,
        year: values.year,
        description: values.description,
        sold: values.sold,
        mileage: values.mileage,
        color: values.color,
        interior_color: values.interior_color, 
        body_type: values.body_type, 
        title: values.title, 
        engine: values.engine, 
        vin_number: values.vin_number, 
        stock_number: values.stock_number,
        image_url: values.image_url,
      };
      if (newCar.make !== "") {
        setInventory([...inventory, newCar]);
      }
    };
    if (values.make === "" || values.model === "" || values.year === "") {
      setError("Please enter a value for all fields*");
      console.log(values);
    } else {
      if (values.image_url === "") {
        values.image_url = image;
      }
      console.log(values);
      axios
        .post(`http://localhost:4000/car_inventory`, values, {})
        .then((res) => {
          addCar();
          getCars();
          resetForm(); 
          // setFieldValue("sold", false);
          // setFieldValue("description", "");
          setShowTable(true);
          console.log("*****");
          console.log(inventory);
        });
    }
  };

  const formReturn = (formData) => {
    const { values, handleChange, handleSubmit } = formData;
    return (
      <form
        className={styles.add_inventory_container}
        onSubmit={handleSubmit}
        action=""
      >
        { showTable ?
        <table className={styles.car_array_container}>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Sold</th>
              <th>Price</th>
              <th>Engine</th>
              <th>Year</th>
              <th>Mileage</th>
              <th>Color</th>
              <th>Interior Color</th>
              <th>Body Type</th>

              <th>Title</th>
              <th>Vin</th>
              <th>Stock #</th>

              {/* <th>Image URL</th> */}
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((car, carIndex) => (
              <tr key={carIndex}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.sold}</td>
                <td>{car.sticker_price}</td>
                <td>{car.engine}</td>
                <td>{car.year}</td>
                <td>{car.mileage}</td>
                <td>{car.color}</td>
                <td>{car.interior_color}</td>
                <td>{car.body_type}</td>
                <td>{car.title}</td>
                <td>{car.vin_number}</td>
                <td>{car.stock_number}</td>
                {/* <td>{car.image_url}</td> */}
                <td>{car.description}</td>
              </tr>
            ))}
          </tbody>
        </table> : ''}

        <section className={styles.make_model_container}>
          <input
            className={styles.inputs}
            value={values.make}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="make"
            placeholder="Vehicle Make"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.model}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="model"
            placeholder="Vehicle Model"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.image_url}
            onChange={handleChange}
            // onChange={(e) => {
            //   setImageUrlLi(e.target.value);
            //   handleChange(e);
            // }}
            name="image_url"
            placeholder="Image URL"
            type="text"
          />
          </section>
{/* here! */}
          <section className={styles.make_model_container}>
          <select
            className={styles.inputs}
            value={values.color}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="color"
            placeholder="Vehicle Color"
            type="text"
          >
            <option value="">Select Color</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Silver">Silver</option>
            <option value="Grey">Grey</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Beige">Beige</option>
            <option value="Gold">Gold</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>

          </select>
          <select
            className={styles.inputs}
            value={values.interior_color}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="interior_color"
            placeholder="Interior Color"
            type="text"
            >
            <option value="">Select Interior Color</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
            <option value="Beige">Beige</option>
            <option value="Tan">Tan</option>
            <option value="Brown">Brown</option>
            <option value="White">White</option>
            <option value="Cream">Cream</option>
            <option value="Charcoal">Charcoal</option>
            <option value="Ivory">Ivory</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>

          </select>
          <select
            className={styles.inputs}
            value={values.body_type}
            onChange={handleChange}
            // onChange={(e) => {
            //   setImageUrlLi(e.target.value);
            //   handleChange(e);
            // }}
            name="body_type"
            placeholder="Body Type"
            type="text"
          >
            <option value="">Select Body Type</option>
            <option value="Pick up Truck">Pick up Truck</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV/Crossover">SUV/Crossover</option>
            <option value="Coupe">Coupe</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
            <option value="Wagon">Wagon</option>
            <option value="Minivan">Minivan</option>
          </select>
          </section>

          <section className={styles.make_model_container}>
          <select
            className={styles.inputs}
            value={values.title}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="title"
            placeholder="Title"
            type="text"
          >
            <option value="">Select Title</option>
            <option value="Clean">Clean</option>
            <option value="Bonded">Bonded</option>
            <option value="No Title">No Title</option>
          </select>
          <input
            className={styles.inputs}
            value={values.vin_number}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="vin_number"
            placeholder="Vin Number"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.stock_number}
            onChange={handleChange}
            // onChange={(e) => {
            //   setImageUrlLi(e.target.value);
            //   handleChange(e);
            // }}
            name="stock_number"
            placeholder="Stock Number"
            type="text"
          />
          </section>
        
        <section className={styles.price_container}>
          <input
            className={styles.inputs}
            value={values.sticker_price}
            onChange={handleChange}
            // onChange={(e) => {
            //   setPriceLi(e.target.value);
            //   handleChange(e);
            // }}
            name="sticker_price"
            placeholder="Price"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.engine}
            onChange={handleChange}
            // onChange={(e) => {
            //   setDownPaymentLi(e.target.value);
            //   handleChange(e);
            // }}
            name="engine"
            placeholder="Engine"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.year}
            onChange={handleChange}
            // onChange={(e) => {
            //   setYearLi(e.target.value);
            //   handleChange(e);
            // }}
            name="year"
            placeholder="Year"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.mileage}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMilesLi(e.target.value);
            //   handleChange(e);
            // }}
            name="mileage"
            placeholder="Mileage"
            type="text"
          />
        </section>

        <span className={styles.radio_btns_container}>
          <span className={styles.input_radio_btn_container}>
            <input
              name="sold"
              value={false}
              onChange={handleChange}
              // onChange={(e) => {
              //   setSoldLi(e.target.value);
              //   handleChange(e);
              // }}
              id="notSold"
              type="radio"
            />{" "}
            <label htmlFor="notSold">Not Sold</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="sold"
              value={true}
              onChange={handleChange}
              // onChange={(e) => {
              //   setSoldLi(e.target.value);
              //   handleChange(e);
              // }}
              id="sold"
              type="radio"
            />{" "}
            <label htmlFor="sold">Sold</label>
          </span>
        </span>

        {/* <button type="button" className={styles.add_btn} onClick={addCar}>
          Add Another Car
        </button> */}
        <textarea
          placeholder="Description"
          name="description"
          id=""
          cols="30"
          rows="3"
          onChange={handleChange}
        ></textarea>
        <button className={styles.save_btn} type="submit">
          Save Car
        </button>
        <div>{error && <div style={{ color: "red" }}>{error}</div>}</div>
      </form>
    );
  };

  return (
    <span className={styles.new_car_container}>
      <h1 className={styles.new_car_title}> Add Inventory </h1>
      <span className={styles.alert_message}>
        **for now we must ensure the make and model mirrors EXACTLY like one that is already found in the DB since the
        image URL is temporarily rendered dynamically**
      </span>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </span>
  );
};

export default AddInventoryForms;
