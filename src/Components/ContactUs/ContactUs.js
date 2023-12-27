import React from "react";
import styles from "./ContactUs.module.css";
import ContactUsCard from "../ContactUsCard/ContactUsCard";
import ContactInfo from "../ContactInfo/ContactInfo";
import test_drive from "../../assets/contact_us_images/test_drive.jpg";
import test_drive2 from "../../assets/contact_us_images/test_drive2.jpg";

function ContactUs () {
    return (
        
       <div className={styles.contact_container}>
        <ContactInfo className={styles.ContactInfo_Component} />
         <iframe className={styles.google_map}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28633.888531722707!2d-98.1018341!3d26.2215181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659f5b93e0b6d5%3A0x948d328f2ce5f191!2sGofer%20Motors%2C%20LLC!5e0!3m2!1sen!2sus!4v1697062032696!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Gofer Motors Location" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                <div className={styles.visit_container}>
                    
        <div className={styles.visit_title}>
        <hr/>
            Visit, make a call, or send us a quick message!
            </div>
            <div className={styles.visit_message}>
            We are committed to providing you with exceptional customer service. Need assistance with the purchasing process? 
            <br/>
            Our dedicated service team is available to help you, whether it's through email, phone, or in-person meetings.
            <br/>
             Your satisfaction is our priority.
             </div>
             </div>
             <br/>
        <ContactUsCard className={styles.ContactUsCard_Component} />
        <div className={styles.contact_pics_container}>
            <img className={styles.contact_pic1} src={test_drive} alt="people talking"/>
            <img className={styles.contact_pic2} src={test_drive2} alt="woman driving"/>
       

       </div>
       </div>
    )
}

export default ContactUs;