import { useContext } from "react";
import styles from "./InventoryCard.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import soldImage from "../../assets/sold.png";
import editImage from "../../assets/edit.png";
import trashImage from "../../assets/recycle-bin.png";

function InventoryCard({ car, getCars }) {
  const { state } = useContext(AuthContext);
  const carImage = require(`../../assets/car_images/${car.stock_number}.jpeg`);

  const handleEditClick = () => {
    axios.put(`http://localhost:4000/car_inventory/${car.car_id}`).then((res) => {
      getCars();
    });
  };

  const handleDeleteClick = () => {
    axios.delete(`http://localhost:4000/car_inventory/${car.car_id}`).then((res) => {
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
    <span className={styles.info_value}>{car.mileage}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Down Payment:</span>
    <span className={styles.info_value}>{car.sticker_price}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Interior Color:</span>
    <span className={styles.info_value}>{car.interior_color}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Exterior Color:</span>
    <span className={styles.info_value}>{car.color}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Engine: </span>
    <span className={styles.info_value}>{car.engine}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>VIN Number:</span>
    <span className={styles.info_value}>{car.vin_number}</span>
  </div>
  <div className={styles.info_row}>
    <span className={styles.subtitle}>Additional Information:</span>
    <span className={styles.info_value}>{car.description}</span>
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
