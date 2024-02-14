import React from 'react';
import styles from './CircularImage.module.css';

const CircularImage = ({ imageUrl, altText = 'Circular Image' }) => {
  return (
    <>
      <div className={styles.circular_image_container}>
        <img className={styles.circular_image} src={imageUrl} alt={altText} />
        <div className={styles.overlay}></div>
      </div>
    </>
  );
};

export default CircularImage;
