import React from "react";
import PropTypes from "prop-types";
import styles from "./CarModal.module.css";

const CarModal = ({ car, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={closeModal}>
          &times;
        </span>
        <h2>{car.make} - {car.model}</h2>
        <div className={styles.carImages}>
          {car.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Image ${index + 1}`}
              className={styles.carImage}
            />
          ))}
        </div>
        <p>Year: {car.year}</p>
        <p>Color: {car.color}</p>
        <p>Price: ${car.price}</p>
        <p>Mileage: {car.mileage} miles</p>
        <p>Description: {car.description}</p>
        {/* Add more characteristics here */}
      </div>
    </div>
  );
};

CarModal.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    // Add more characteristics as needed
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CarModal;
