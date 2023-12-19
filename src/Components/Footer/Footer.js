import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_line_container}>
        <hr />
      </div>
      <div className={styles.footer_content_container}>
        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>HOW TO REACH US</h3>
            <div className={styles.social_icon_container}>
              <a
                href="https://www.facebook.com/profile.php?id=100094081966775"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FaFacebook className={styles.social_icon} /> */}
              </a>
              <a
                href="https://www.instagram.com/gofermotorsllc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FaInstagram className={styles.social_icon} /> */}
              </a>
            </div>
          </div>
          <div className={styles.vertical_line}></div>
        </div>

        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>STORE HOURS</h3>
            <div className={styles.social_icon_container}></div>
          </div>
          <div className={styles.vertical_line}></div>
        </div>

        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>CONNECT WITH US</h3>
            <div className={styles.social_icon_container}>
              <a
                href="https://www.facebook.com/profile.php?id=100094081966775"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.social_icon} />
              </a>
              <a
                href="https://www.instagram.com/gofermotorsllc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.social_icon} />
              </a>
            </div>
          </div>
          <div className={styles.vertical_line}></div>
        </div>

        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>GET STARTED</h3>
            <span className={styles.nav_outer_container}>
              <span className={styles.nav_container}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span
                    className={`${styles.nav_item} ${
                      location.pathname === "/" ? styles.active : ""
                    }`}
                  >
                    Home
                  </span>
                </Link>

                <Link to="/inventory" style={{ textDecoration: "none" }}>
                  <span
                    className={`${styles.nav_item} ${
                      location.pathname === "/inventory" ? styles.active : ""
                    }`}
                  >
                    Inventory
                  </span>
                </Link>
              </span>
              <span className={styles.nav_container}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <span
                    className={`${styles.nav_item} ${
                      location.pathname === "/contact" ? styles.active : ""
                    }`}
                  >
                    Contact Us
                  </span>
                </Link>

                <Link to="/privacyp" style={{ textDecoration: "none" }}>
                  <span
                    className={`${styles.nav_item} ${
                      location.pathname === "/privacyp" ? styles.active : ""
                    }`}
                  >
                    Privacy Policy
                  </span>
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footer_credits}>
        <p className={styles.privacy_rights}>
          © 2023 Gofer Motors LLC. All rights reserved.
        </p>
        {/* <p>Developed by <a href="https://katrynayaworski.github.io" target="_blank">Katryna Yaworski</a></p> */}
      </div>
    </div>
  );
}

export default Footer;
