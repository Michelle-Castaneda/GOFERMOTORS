import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import AuthContext from "../../store/authContext";
import Login from "../Login/Login";

function Footer() {
  const { state, dispatch } = useContext(AuthContext);
  const nav = useNavigate();
  const location = useLocation();

  const address = "1703 N Tower Rd, Alamo, TX 78516";
  const phoneNumber = "+9562585021";
  const email = "mailto:y.gofer@gofermotors.com";
  const whatsAppPhone = "9562585021";

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsAppPhone}?action=call`;

    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}`;
    window.location.href = mapsUrl;
  };
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_line_container}>
        <hr />
      </div>
      <div className={styles.footer_content_container}>
        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>HOW TO REACH US</h3>

            <div className={styles.contact_container}>
              <button
                className={styles.email_button}
                onClick={handleEmailClick}
              >
                <FontAwesomeIcon
                  className={styles.email_icon}
                  icon={faEnvelope}
                  color="rgba(214, 163, 11, 0.816)"
                  size="2x"
                />
                y.gofer@gofermotors.com
              </button>
              <a href={`tel:${phoneNumber}`} className={styles.phone_tag}>
                <FontAwesomeIcon
                  color={"rgba(214, 163, 11, 0.816)"}
                  size="2x"
                  style={{ transform: "rotate(35deg)" }}
                  icon={faMobileAlt}
                />
                (956)-258-5021
              </a>
              <span
                className={styles.whats_app_tag}
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp
                  color={"rgba(214, 163, 11, 0.816)"}
                  size="2vw"
                  onClick={handleWhatsAppClick}
                />
                (956)-258-5021
              </span>

              <span onClick={openGoogleMaps}>
                <button className={styles.map_button}>
                  <FontAwesomeIcon
                    color={"rgba(214, 163, 11, 0.816)"}
                    size="2x"
                    icon={faMapMarkerAlt}
                  />{" "}
                  {address}
                </button>
              </span>
            </div>
          </div>
          <div className={styles.vertical_line}></div>
        </div>

        <div className={styles.data_outer_container}>
          <div className={styles.data_container}>
            <h3>STORE HOURS</h3>
            <div className={styles.store_hours_container}>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Monday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Tuesday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Wednesday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Thursday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Friday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Saturday</span>
                <span className={styles.store_hours_time}>
                  9:00 AM - 3:00 PM
                </span>
              </div>
              <div className={styles.store_hours_row}>
                <span className={styles.store_hours_day}>Sunday</span>
                <span className={styles.store_hours_time}>By Appointment</span>
              </div>
            </div>
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
            <h3 className={styles.get_started}>GET STARTED</h3>
            <div className={styles.nav_container}>
              {/* <span className={styles.nav_container}> */}
              <div className={styles.nav_group}>
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
                {/* </span> */}
              </div>
              <div className={styles.nav_group}>
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
              </div>
              <div className={styles.nav_group}>
               
                  {state.token ? (
                    <span
                      className={`${styles.nav_item} ${
                        isModalOpen ? styles.modalOpen : ""
                      }`}
                      id="nav_btn"
                      onClick={() => {
                        dispatch({ type: "LOGOUT" });
                        nav("/");
                      }}
                    >
                      Logout
                    </span>
                  ) : (
                    <span
                      onClick={openModal}
                      className={`${styles.nav_item} ${
                        isModalOpen ? styles.modalOpen : ""
                      }`}
                      id="nav_btn"
                    >
                      {" "}
                      <span /> Log in / Register
                    </span>
                  )}

                  <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <Login
                      className={styles.nav_item}
                      isOpen={isModalOpen}
                      closeModal={closeModal}
                    />
                  </Modal>
                  {/* <Link to="/authentication" style={{ textDecoration: "none" }}>
        <span className="header_login">Login</span>
      </Link> */}
                

                <Link to="/favorites" style={{ textDecoration: "none" }}>
                  <span
                    className={`${styles.nav_item} ${
                      location.pathname === "/favorites" ? styles.active : ""
                    }`}
                  >
                    Favorites
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_credits}>
        <p className={styles.privacy_rights}>
          © 2023 Gofer Motors LLC. All rights reserved.
        </p>
        <p className={styles.privacy_rights}>
          {" "}
          Developed by{" "}
          <a href="https://katrynayaworski.github.io" target="_blank">
            Katryna Yaworski
          </a> & Michelle Castaneda
        </p>
      </div>
    </div>
  );
}

export default Footer;
