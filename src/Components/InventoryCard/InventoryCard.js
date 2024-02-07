import React, { useContext } from "react";
import styles from "./InventoryCard.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import soldImage from "../../assets/sold.png";
import editImage from "../../assets/edit.png";
import trashImage from "../../assets/recycle-bin.png"

function InventoryCard({ car, getCars }) {
  const { state } = useContext(AuthContext);

  // console.log(car.make)

  const carImage = require(`../../assets/car_images/${car.stock_number}.jpeg`);
  

  const handleEditClick = () => {
    // event.stopPropagation();
    console.log("edit button clicked");
    axios
      .put(`http://localhost:4000/car_inventory/${car.car_id}`)
      .then((res) => {
        console.log(res.data);
        getCars();
      });
  };
  const handleDeleteClick = () => {
    // event.stopPropagation();
    console.log("delete button clicked");
    axios
      .delete(`http://localhost:4000/car_inventory/${car.car_id}`)
      .then((res) => {
        // console.log(res.data);
        getCars();
      });
  };
  return (
    <div className={styles.car_card}>
    <span className={styles.car_image_container}>
      {(state.token && state.isadmin === true) || state.isadmin === "true" ? (
        <div className={styles.admin_btn_container}>
          <button className={styles.edit_btn}>
            <img className={styles.edit_img} src={editImage} alt="" />
          </button>
          <button className={styles.delete_btn} onClick={handleDeleteClick}>
            {" "}
            <img className={styles.trash_img} src={trashImage} alt="" />
          </button>
          <button className={styles.sold_btn} onClick={handleEditClick}>
            <img className={styles.sold_img} src={soldImage} alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
      
        <img src={carImage} className={styles.carImageCard} alt="car" />
      </span>

      <div className={styles.info}>
        <span className={styles.title}>
          {car.year} {car.make} {car.model}
        </span>
        <hr />

        <div className={styles.car_miles_price_container}>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Mileage:</span>
    <span className={styles.info_value}>132,048</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Down Payment:</span>
    <span className={styles.info_value}>$2,500-$3,500</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Interior Color:</span>
    <span className={styles.info_value}>Black</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Exterior Color:</span>
    <span className={styles.info_value}>Green</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Engine: </span>
    <span className={styles.info_value}>2.4</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>VIN Number:</span>
    <span className={styles.info_value}>ZACCJABB5JPH60547</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Additional Information:</span>
    <span className={styles.info_value}>Working AC</span>
  </div>
</div>

        <span>
          {/* <hr />
        <span className="contact_container">
          <button className="phone-number">(956) 258-5021</button>
          <button className="interested">Request Info</button>
        </span> */}
          <hr />
          </span>
          <p className={styles.location}>Alamo, TX</p>
      </div>
    </div>
  );
}

export default InventoryCard;
