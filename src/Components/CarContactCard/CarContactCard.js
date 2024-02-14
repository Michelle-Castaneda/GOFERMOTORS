import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CarContactCard.module.css";

function CarContactCard() {
  const [carListings, setCarListings] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    interest: "",
    comments: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/car_inventory")
      .then((response) => setCarListings(response.data))
      .catch((error) => {
        console.error(
          "Error get request for car listings:",
          error.response.data
        );
      });
  }, []);

  const handleInputChange = (e) => {
    setSuccessMessage("");
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      comments: formData.comments,
      car_id: selectedCar,
    };

    axios
      .post("http://localhost:4000/contact_information", contactData)
      .then((response) => {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          comments: "",
        });
        setSuccessMessage("Your questions have been sent");
      })
      .catch((error) => {
        console.error(
          "Error post request to contact data:",
          error.response.data
        );
        setSuccessMessage("Please enter all fields*");
      });
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.header_container}>
        <h2 className={styles.header}>Contact Us</h2>
        <h2 className={styles.header_phone}>(956) 258 - 5021</h2>
      </div>
      <div className={styles.first_input_row}>
        <input
          className={styles.contact_name}
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          className={styles.contact_last}
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.third_input_row}>
        <input
          className={styles.contact_email}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className={styles.contact_phone}
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <input
          className={styles.contact_questions}
          placeholder="I'm interested in..."
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
        />
      </div>
      <select
        className={styles.contact_select}
        value={formData.interest}
        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
      >
        <option value="">I'm interested in this</option>
        <option value="">I'd like to know your best price for this</option>
        <option value="">I'd like to test drive this</option>
        <option value="">I'd like a history report for this vehicle</option>
      </select>
      {successMessage && (
        <p className={styles.contact_successMessage}>{successMessage}</p>
      )}

      <button className={styles.contact_send} onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default CarContactCard;
