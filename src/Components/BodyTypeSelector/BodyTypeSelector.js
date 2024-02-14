import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./BodyTypeSelector.module.css";
import passenger from '../../assets/body_types/passenger.png';
import pickup from '../../assets/body_types/pickup.png';
import sedan from '../../assets/body_types/sedan.png';
import suv from '../../assets/body_types/suv.png';
import wagon from '../../assets/body_types/wagon.png';
import convertible from '../../assets/body_types/convertible.png';
import coupe from '../../assets/body_types/coupe.png';
import hatchback from '../../assets/body_types/hatchback.png';

const bodyTypes = [
  { type: 'PASSENGER', path: passenger },
  { type: 'PICKUP', path: pickup },
  { type: 'SEDAN', path: sedan },
  { type: 'SUV', path: suv },
  { type: 'WAGON', path: wagon },
  { type: 'CONVERTIBLE', path: convertible },
  { type: 'COUPE', path: coupe },
  { type: 'HATCHBACK', path: hatchback },
];

const BodyTypeSelector = () => {
  const handleImageClick = (bodyType) => {
    console.log(`Navigating to /inventory/${bodyType.toLowerCase()}`);
  };

  return (
    <div className={styles.body_container}>
      <div className={styles.body_title}>SHOP BY BODY STYLE</div>
      <div className={styles.body_items}>
        {bodyTypes.map(({ type, path }) => (
          <Link to={`/inventory/${type.toLowerCase()}`} key={type} style={{ textDecoration: 'none' }}>
            <img
              src={path}
              alt={type}
              style={{ width: '150px', height: '100px', cursor: 'pointer' }}
              onClick={() => handleImageClick(type)}
            />
            <p>{type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyTypeSelector;
