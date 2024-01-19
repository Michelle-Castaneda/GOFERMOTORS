import React from 'react';
import styles from './CircularImage.module.css';

const CircularImage = ({ imageUrl }) => {
  return (
  <div  className={styles.circular_image_container}>
  <img className={styles.circular_image} src={imageUrl} alt="Circular" />
    <div className={styles.overlay}></div>
  </div>
  );
};

export default CircularImage;