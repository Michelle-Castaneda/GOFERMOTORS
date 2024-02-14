import React from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";
import ContactInfo from "../ContactInfo/ContactInfo";

const PrivacyPolicy = () => {
  return (
    <>
      <div className={styles.privacyContainer}>
        <h1 className={styles.privacyTitle}>Privacy Policy for Gofer Motors LLC</h1>
        <p className={styles.privacyDate}>Last Update: February 2024</p>

        <p className={styles.privacyThankYou}>Thank you for visiting Gofer Motos LLC website.</p>

        <p className={styles.privacyOutlines}>
          This Privacy Policy outlines the types of personal information we collect, how it is used, and the measures
          we take to safeguard your information.
        </p>

        <h2 className={styles.privacyTitle}>Information We Collect</h2>

        <h3 className={styles.privacySubtitle}>1. Personal Information:</h3>
        <p className={styles.privacyText}>- We may collect personal information such as your name, address, email, and phone number when you submit inquiries, schedule test drives, or communicate with us through our website.</p>

        <h3 className={styles.privacySubtitle}>2. Vehicle Information:</h3>
        <p className={styles.privacyText}>- In the process of exploring our inventory or expressing interest in a vehicle, we may collect details about your preferences and choices.</p>

        <h3 className={styles.privacySubtitle}>3. Cookies and Tracking Technologies:</h3>
        <p className={styles.privacyText}>- Our website may use cookies and similar tracking technologies to enhance user experience and collect information about your browsing activities.</p>

        <h2 className={styles.privacyTitle}>How We Use Your Information</h2>

        <h3 className={styles.privacySubtitle}>1. Communication:</h3>
        <p className={styles.privacyText}>- We may use your contact information to respond to inquiries, provide information about our services, and communicate important updates.</p>

        <h3 className={styles.privacySubtitle}>2. Vehicle Transactions:</h3>
        <p className={styles.privacyText}>- If you decide to purchase a vehicle from us, we will use the provided information to facilitate the transaction, including necessary paperwork.</p>

        <h3 className={styles.privacySubtitle}>3. Marketing and Promotions:</h3>
        <p className={styles.privacyText}>- With your consent, we may use your information to send promotional materials, newsletters, and updates about our products and services.</p>

        <h2 className={styles.privacyTitle}>Information Sharing</h2>
        <p className={styles.privacyText}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.</p>

        <h2 className={styles.privacyTitle}>Data Security</h2>
        <p className={styles.privacyText}>We take reasonable measures to protect the confidentiality and security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure.</p>

        <h2 className={styles.privacyTitle}>Your Choices</h2>
        <h3 className={styles.privacySubtitle}>You have the right to:</h3>
        <p className={styles.privacyText}>- Opt out of receiving marketing communications.</p>
        <p className={styles.privacyText}>- Access and update your personal information.</p>
        <p className={styles.privacyText}>- Request the deletion of your personal information, subject to legal obligations.</p>

        <h2 className={styles.privacyTitle}>Changes to This Privacy Policy</h2>
        <p className={styles.privacyText}>We may update this Privacy Policy periodically. The latest version will be posted on our website with the effective date.</p>

        <h2 className={styles.privacyTitle}>Contact Us</h2>
        <h3 className={styles.privacySubtitle}>If you have any questions or concerns about this Privacy Policy, please contact us.</h3>
      </div>

      <div className={styles.contactContainer}>
        <ContactInfo />
      </div>
    </>
  );
};

export default PrivacyPolicy;
