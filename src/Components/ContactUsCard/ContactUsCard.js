/* global grecaptcha */

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './ContactUsCard.module.css';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsCard = () => {
    const [isVerified, setVerified] = useState(false);
    const [carListings, setCarListings] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [successMessage, setSuccessMessage] = useState("");

    const handleRecaptchaVerify = (response) => {
setVerified(true);
  };


  const handleSubmitRecaptcha = async (e) => {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6LfiHVApAAAAAEOmvfG-Op2teLArraH-lYvBS2N-', { action: 'LOGIN' });

        const requestBody = {
            event: {
                token: token,
                expectedAction: 'submit', 
                siteKey: '6LfiHVApAAAAAEOmvfG-Op2teLArraH-lYvBS2N-',
            }
        };

        const requestBodyString = JSON.stringify(requestBody, null, 2);

        const blob = new Blob([requestBodyString], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'request.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        const apiKey = process.env.REACT_APP_RECAPTCHA_API_KEY;
        const apiUrl = 'https://recaptchaenterprise.googleapis.com/v1/projects/gofer-motors-web-1705258432704/assessments';

        try {
            const response = await axios.post(apiUrl, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Key': apiKey,
                },
            });

            console.log('POST request successful:', response.data);
        } catch (error) {
            console.error('Error sending POST request:', error.response.data);
        }
    });
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
                    name: '',
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
                className={styles.name} 
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
        sitekey="6LfiHVApAAAAAEOmvfG-Op2teLArraH-lYvBS2N-" 
        onChange={handleRecaptchaVerify}
      />
            <button className={styles.send_btn} onClick={handleSubmitRecaptcha}>Send</button>
        </div>
        </form>
    )
};

export default ContactUsCard;
