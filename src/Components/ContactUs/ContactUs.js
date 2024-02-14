import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import axios from "axios";
import ContactInfo from "../ContactInfo/ContactInfo";
import InventoryCard from "../InventoryCard/InventoryCard";
// import test_drive from "../../assets/contact_us_images/test_drive.jpg";
// import test_drive2 from "../../assets/contact_us_images/test_drive2.jpg";
// import customer_shaking_hands from "../../assets/contact_us_images/customer_shaking_hands.jpg";
// import Appointment from "../Appointment/Appointment"


function ContactUs() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/car_inventory")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

  return (
    <div className={styles.contact_complete}>
      <div className={styles.banner} />

      <div className={styles.contact_container}>
        <ContactInfo />
        <iframe async defer
          className={styles.google_map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28633.888531722707!2d-98.1018341!3d26.2215181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659f5b93e0b6d5%3A0x948d328f2ce5f191!2sGofer%20Motors%2C%20LLC!5e0!3m2!1sen!2sus!4v1697062032696!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          title="Gofer Motors Location"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <hr />
      
      <div className={styles.whyGofer_container}>
      <div className={styles.whyGofer_title}>
    Why choose Gofer Motors?
</div>
<br/>
<br/>

<div className={styles.whyGofer_subtitle}>
    Wide Variety of Quality Vehicles
</div>
<div className={styles.whyGofer_text}>
Diverse selection of makes and models, each vehicle in our inventory guarantees exceptional quality, delivering optimal performance 
and unwavering reliability on every journey.
</div>
<br/>

<div className={styles.whyGofer_subtitle}>
    Convienient Financing
</div>
<div className={styles.whyGofer_text}>
Multiple financing options are available, allowing us to tailor a financing solution specifically to align with your unique needs. Whether you prefer flexible terms, competitive interest rates, or a customized payment plan, our goal is to provide you with the financial flexibility that suits your individual preferences and circumstances.    </div>
    <br/>

<div className={styles.whyGofer_subtitle}>
    Exceptional Customer Service
</div>
<div className={styles.whyGofer_text}>
Our sales and service team are knowledgeable, approachable, and dedicated to providing exceptional assistance, ensuring that your experience with us is not only informed and friendly but also exceeds your expectations.    </div>
    <br/>
</div>

<hr/>
           
<div className={styles.reviews_container}>
        <div className="elfsight-app-f758bd66-983b-415b-97cd-0c676468ba9f" data-elfsight-app-lazy>

        </div>
      </div>

      <div className={styles.inventory_cards_container}>
        {cars.map((car) => (
          <InventoryCard key={car.stock_number} car={car} />
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
