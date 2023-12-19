import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./gofer_logo.png";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import AuthContext from "../../store/authContext";
import Login from "../Login/Login";
import loginImg from "../../assets/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp} from 'react-icons/fa';

function Header() {
  const { state, dispatch } = useContext(AuthContext);
  const nav = useNavigate();
  const location = useLocation();
  const phoneNumber = "+9562585021";
  const [isModalOpen, setModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsAppPhone = '9562585021';
    const whatsappUrl = `https://wa.me/${whatsAppPhone}?action=call`;
    window.open(whatsappUrl, '_blank');
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const address = "1703 N Tower Rd, Alamo, TX 78516";

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}`;
    window.location.href = mapsUrl;
  };
  return (
    <div className={styles.header}>
      <div className={styles.header_top_container}>
        <span className={styles.header_top_left}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              className={styles.header_logo}
              alt="gofer company logo"
            />
          </Link>
        </span>
        <span className={styles.header_top_right}>
          <span className={styles.header_top_right_data_container}>
            <span onClick={openGoogleMaps} className={styles.top_right_address_container}>
              <button
                className={styles.header_top_right_address}
              >
                <FontAwesomeIcon  icon={faMapMarkerAlt} /> 1703 N
                Tower Rd Alamo, Texas, United States
              </button>
            </span>
            <span className={styles.header_top_right_phone_container}>
              <a
                href={`tel:${phoneNumber}`}
                className={styles.header_top_right_phone}
              >
                <FontAwesomeIcon icon={faMobile} />
                (956) 258-5021
              </a>
            </span>
            <span className={styles.header_top_right_phone_container}>
              <span                
                className={styles.header_top_right_phone}
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp size={20}
                onClick={handleWhatsAppClick} />
                (956) 258-5021
              </span>
            </span>
          </span>
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
        </span>
      </div>
      <nav className={styles.header_bottom_container}>
        <span className={styles.nav_bottom_left_container}>
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

          <span className={styles.nav_item}>Financing</span>
        </span>
        <span className={styles.nav_bottom_right_container}>
          {state.token ? (
            <span
              className={`${styles.nav_item_btn} ${
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
              className={`${styles.nav_item_btn} ${
                isModalOpen ? styles.modalOpen : ""
              }`}
              id="nav_btn"
            >
              {" "}
              <img className={styles.login_img} src={loginImg} alt="" /> Log in
              / Register
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
        </span>
      </nav>
    </div>
  );
}

export default Header;
