import React, { useState, useEffect } from "react";
import axios from "axios";
import './AppointmentCard.css'

function AppointmentCard () {
    const [carListings, setCarListings] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [successMessage, setSuccessMessage] = useState("");

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
        const appointmentData = {
            Name: formData.name,
            Last_Name: formData.lastName,
            Phone: formData.phone,
            Email: formData.email,
            Comments: formData.comments,
            car_id: selectedCar
        };

        
        
        axios.post("http://localhost:4000/contact_information", appointmentData)
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
                console.error("Error post request to appointment data:", error.response.data);
            });
    };

    return (
        <div className="appointmentCard_container"> 
            <input 
                className="appointment_name" 
                placeholder="Name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
            />
            <input 
                className="appointment_last" 
                placeholder="Last Name" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleInputChange}
            />
            <input 
                className="appointment_phone" 
                placeholder="Phone Number" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input 
                className="appointment_email" 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <input 
                className="appointment_questions" 
                placeholder="Comments"
                name="comments"
                value={formData.comments}
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
            {
    successMessage && <p className="successMessage">{successMessage}</p>
}

            <button className="appointment_send" onClick={handleSubmit}>Send</button>
        </div>
    )
};

export default AppointmentCard;
