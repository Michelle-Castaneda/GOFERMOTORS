import React from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css"
import ContactInfo from "../ContactInfo/ContactInfo";

const PrivacyPolicy = () => {
    return(
    <div className={styles.privacyp_container}>

<p className={styles.privacy_title}>Privacy Policy for Gofer Motors LLC</p>

<p className={styles.privacy_date}> Last Update: February 2024</p>

<p className={styles.privacy_thankyou}>Thank you for visiting Gofer Motos LLC website.</p> 

<p className={styles.privacy_outlines}>This Privacy Policy outlines the types of personal information we collect, how it is used, and the measures we take to safeguard your information.
</p>
<p className={styles.privacy_title}>Information We Collect</p>

<p className={styles.privacy_subtitle}>1. Personal Information:</p>
<p className={styles.privacy_text}>- We may collect personal information such as your name, address, email, and phone number when you submit inquiries, schedule test drives, or communicate with us through our website.</p>

   <p className={styles.privacy_subtitle}>2. Vehicle Information:</p>
   <p className={styles.privacy_text}>- In the process of exploring our inventory or expressing interest in a vehicle, we may collect details about your preferences and choices.</p>

   <p className={styles.privacy_subtitle}>3. Cookies and Tracking Technologies:</p>
   <p className={styles.privacy_text}>- Our website may use cookies and similar tracking technologies to enhance user experience and collect information about your browsing activities.</p>

   <p className={styles.privacy_title}>How We Use Your Information</p>

   <p className={styles.privacy_subtitle}>1. Communication:</p>
   <p className={styles.privacy_text}>- We may use your contact information to respond to inquiries, provide information about our services, and communicate important updates.</p>

   <p className={styles.privacy_subtitle}>2. Vehicle Transactions:</p>
   <p className={styles.privacy_text}>- If you decide to purchase a vehicle from us, we will use the provided information to facilitate the transaction, including necessary paperwork.</p>

<p className={styles.privacy_subtitle}>. Marketing and Promotions:</p>
<p className={styles.privacy_text}>- With your consent, we may use your information to send promotional materials, newsletters, and updates about our products and services.</p>

   <p className={styles.privacy_title}>Information Sharing</p>

   <p className={styles.privacy_text}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.</p>

<p className={styles.privacy_title}>Data Security</p>

<p className={styles.privacy_text}>We take reasonable measures to protect the confidentiality and security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure.</p>

<p className={styles.privacy_title}>Your Choices</p>

<p className={styles.privacy_subtitle}>You have the right to:</p>
- Opt out of receiving marketing communications.
- Access and update your personal information.
- Request the deletion of your personal information, subject to legal obligations.

<p className={styles.privacy_title}>Changes to This Privacy Policy</p>

<p className={styles.privacy_text}>We may update this Privacy Policy periodically. The latest version will be posted on our website with the effective date.</p>

<p className={styles.privacy_title}>Contact Us</p>

<p className={styles.privacy_subtitle}>If you have any questions or concerns about this Privacy Policy, please contact us.</p>

<div className={styles.contact_container}>

<ContactInfo />
</div>
<br/>

    </div>
    )
}

export default PrivacyPolicy