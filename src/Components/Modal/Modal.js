import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen, closeModal, children }) => {

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.modal_content}`)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} role="dialog" aria-modal="true">
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={closeModal} aria-label="Close Modal">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
