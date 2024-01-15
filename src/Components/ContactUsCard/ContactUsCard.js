/* global ReCAPTCHA */

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './ContactUsCard.module.css';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsCard = () => {
    const [isVerified, setVerified] = useState(false);
    const [carListings, setCarListings] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [successMessage, setSuccessMessage] = useState("");


    const handleRecaptchaVerify = (recaptchaResponse) => {
        setVerified(true);
    };


    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        comments: ''
    });

    useEffect(() => {
        axios.get("http://localhost:4000/car_inventory")        
            .then(response => setCarListings(response.data)) 
            .catch(error => {
                console.error("Error get request for car inventory:", error.response.data);
            });
    }, []);

    const handleInputChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = () => {
        const ContactData = {
            Name: formData.name,
            Last_Name: formData.lastName,
            Phone: formData.phone,
            Email: formData.email,
            Comments: formData.comments,
            car_id: selectedCar
        };

        
        
        axios.post("http://localhost:4000/contact_information", ContactData)
            .then(response => {

                setFormData({
                    firstname: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    comments: ''
                });
                setSelectedCar('');
                
                setSuccessMessage("Your appointment request was sent successfully!");
            })
            .catch(error => {
                console.error("Error post request to Contact data:", error.response.data);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className={styles.contactCard_container}> 
            <input 
                className={styles.firstname} 
                placeholder="First Name" 
                name="firstName" 
                value={formData.name} 
                onChange={handleInputChange}
            />
            <input 
                className={styles.last_name} 
                placeholder="Last Name" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleInputChange}
            />
            <input 
                className={styles.phone} 
                placeholder="Phone Number" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input 
                className={styles.email} 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
           
            
            <select 
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
            >
                <option value="">Select a car</option>
                {carListings.map(car => (
                     <option key={car.car_id} value={car.car_id}>
                     {car.make} {car.model} ({car.year})</option>
                ))}
            </select>
            <textarea 
                className={styles.comments} 
                placeholder="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
            />
            {
    successMessage && <p className={styles.success_message}>{successMessage}</p>
}
<ReCAPTCHA
    sitekey="6Lcp31ApAAAAAPQ-DjIVPvd82diOysWVlgp4G7pL"
    onChange={recaptchaResponse => handleRecaptchaVerify(recaptchaResponse)}
/>


            <button className={styles.g-recaptcha}
    type='submit'>
  Submit
</button>
        </div>
        </form>
    )
};

export default ContactUsCard;
