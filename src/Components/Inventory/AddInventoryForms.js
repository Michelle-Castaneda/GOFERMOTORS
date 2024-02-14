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

  const onSubmit = (values, { resetForm }) => {
    const addCar = () => {
      const newCar = { ...values };
      if (newCar.make !== "") {
        setInventory([...inventory, newCar]);
      }
    };
    if (values.make === "" || values.model === "" || values.year === "") {
      setError("Please enter a value for all fields*");
    } else {
      if (values.image_url === "") {
        values.image_url = image;
      }
      axios.post(`http://localhost:4000/car_inventory`, values, {})
        .then((res) => {
          addCar();
          getCars();
          resetForm(); 
          setShowTable(true);
        });
    }
  };

  const formReturn = (formData) => {
    const { values, handleChange, handleSubmit } = formData;
    return (
      <form className={styles.add_inventory_container} onSubmit={handleSubmit} action="">
        {showTable &&
          <table className={styles.car_array_container}>
            {/* table body content */}
          </table>
        }

        {/* Form input fields */}
        <button className={styles.save_btn} type="submit">Save Car</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    );
  };

  return (
    <span className={styles.new_car_container}>
      {/* Component Title and Alert Message */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </span>
  );
};

export default AddInventoryForms;
