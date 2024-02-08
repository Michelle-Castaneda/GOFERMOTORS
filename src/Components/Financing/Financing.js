import React from "react";
import styles from "./Financing.module.css";
import ContactInfo from "../ContactInfo/ContactInfo"
// import Appointment from "../Appointment/AppointmentCard";
import customer_shaking_hands from "../../assets/contact_us_images/customer-shaking-hands.jpg";
import standying_by from "../../assets/contact_us_images/standing_by.jpg";
import { getSelectUtilityClasses } from "@mui/material";
// import InventoryCard from "../InventoryCard/InventoryCard";

const Financing = () => {

    return(
        <div className={styles.financing_wrapper}>
            <div className={styles.financing_title}>
                Welcome to the easiest way to buy your next car
                </div>

               <p> At Gofer Motors, we understand that purchasing a vehicle is a significant investment. 
                That's why we've partnered with several reputable financing companies to provide you with flexible and competitive auto financing options. 
                Whether you're looking for a loan with a low interest rate, flexible repayment terms, or special financing programs, we've got you covered.</p> 


                <div className={styles.next_vehicle}>
Finance your next vehicle
</div>

<div className={styles.inhouse_container}>
<img className={styles.customer_picture} src={customer_shaking_hands} alt="People Shaking Hands"/>

                <div className={styles.subtitle}>
                    In-House Financing
                </div>
<div className={styles.financing_text}>Gofer Motors has financed hundreds of people with our exclusive in-house financing model, allowing us to provide flexible options for all.
<div className={styles.terms_apply}>*Only a select few vehicles are eligible, subject to potential alterations, and conditions may vary.</div>
</div>


</div>

<div className={styles.financing_container}>
<img className={styles.customer_picture} src={standying_by} alt="Men Standing Next to Cars"/>

 <div className={styles.subtitle}>
Auto Financing
</div>

<div className={styles.financing_expert}>
Our financing experts are here to guide you through the process and help you find the best financing solution tailored to your needs and budget. 
With our hassle-free financing options, you can get behind the wheel of your dream car sooner than you think.
</div>
</div>

{/* <div className={styles.subtitle}>
    We accept Mexican Passport
</div> */}
<br/>
<hr /> 
<hr /> 

<div className={styles.benefits_list}>
<div className={styles.subtitle_benefits}>

    Benefits of Auto Financing with Gofer Motors:
    </div>

    <ul>
      <li>Competitive interest rates</li>
      <li>Flexible repayment terms</li>
      <li>Quick and easy approval process</li>
      <li>Special financing programs available</li>
      <li>Expert guidance from our financing team</li>
    </ul>
    <div className={styles.credit_text}>
    Whether you have good credit, bad credit, or no credit history at all, we're dedicated to helping you secure the financing you need to drive away in the perfect vehicle.
    </div>
    </div>

    <br/>
<hr /> 
<hr />

<div className={styles.subtitle_contact}>Contact Us For More Information</div>

{/* <ContactUsCard className={styles.contact_financing} /> */}
{/* <Appointment/> */}
{/* <InventoryCard/> */}

<div className={styles.contact_container}>
<ContactInfo/>
</div>

</div>
    )}

export default Financing;