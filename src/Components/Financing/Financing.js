import React from "react";
import styles from "./Financing.module.css";
// import ContactInfo from "../ContactInfo/ContactInfo"
import Appointment from "../Appointment/AppointmentCard";


const Financing = () => {

    return(
        <div className={styles.financing_container}>
            <div className={styles.financing_title}>
                Welcome to the easiest way to buy your next car
                </div>

                <div className={styles.next_vehicle}>
Finance your next vehicle
</div>

                <div className={styles.subtitle}>
                    In-House Financing
                </div>
<div className={styles.financing_text}>
Gofer Motors has financed over hundreds of people with our exclusive In-House financing model allows us to provide flexible options for all.
Teaming up with several financing companies.
</div>
               
 <div className={styles.subtitle}>
Financing options
Pre-requesites

</div>

<div>Contact Us For More Information</div>

{/* <ContactUsCard className={styles.contact_financing} /> */}
<Appointment/>


</div>

    )}

export default Financing;