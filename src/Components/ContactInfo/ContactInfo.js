import React from 'react';
import styles from './ContactInfo.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp} from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



function ContactInfo() {
  return (
    <div className={styles.contactInfo_container}>
      <div className={styles.contactInfo_title}>
        GOFER MOTORS LLC
        <hr />
        </div> 
        <div className={styles.contactInfo_mail}>
        <CiMail className={styles.icon} />
        <div className={styles.textContainer}>

     <p> y.gofer@gofermotors.com | sales@gofermotors.com</p>
      </div>
      </div>
      <div className={styles.contactInfo_phone}>
      <FaPhoneAlt className={styles.icon} />
      <div className={styles.textContainer}>
        (956) 258 - 5021 </div>
        <br/>
        <FaWhatsapp size={20}/>
        (956) 533 - 8752
      </div>
      <div className={styles.contactInfo_address}>
      <FontAwesomeIcon  icon={faMapMarkerAlt} className={styles.icon} />
        1703 N Tower Rd Alamo, Texas, United States.
      </div>
      <br/>
      <div className={styles.storeHours_title}>
          STORE HOURS
          <hr />
        </div> 
      <div className={styles.storeHours_container}>
        <div className={styles.storeHours_days}>
          <div>Monday - Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className={styles.storeHours_hours}>
          <div>9:00 AM - 6:00 PM</div>
          <div>9:00 AM - 3:00 PM</div>
          <div>BY APPOINTMENT</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
