import React, { useState, useEffect } from "react";
import axios from "axios";
import './AppointmentCard.css';

function AppointmentCard() {
    const [carListings, setCarListings] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        comments: ''
    });
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const fetchCarListings = async () => {
            try {
                const response = await axios.get("http://localhost:4000/car_inventory");
                setCarListings(response.data);
            } catch (error) {
                console.error("Error get request for car inventory:", error.response.data);
            }
        };
        fetchCarListings();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const appointmentData = {
            Name: formData.name,
            Last_Name: formData.lastName,
            Phone: formData.phone,
            Email: formData.email,
            Comments: formData.comments,
            car_id: selectedCar
        };

        try {
            await axios.post("http://localhost:4000/contact_information", appointmentData);
            setSuccessMessage("Your appointment request was sent successfully!");
        } catch (error) {
            console.error("Error post request to appointment data:", error.response || error.message || error);
            setSuccessMessage("Failed to send appointment request. Please try again later.");
        } finally {
            setFormData({
                name: '',
                lastName: '',
                phone: '',
                email: '',
                comments: ''
            });
            setSelectedCar('');
        }
    };

    return (
        <div className="appointmentCard_container">
            <input
                className="appointment_input"
                placeholder="Name"
                name="name"
                value={successMessage ? '' : formData.name}
                onChange={handleInputChange}
            />
            <input
                className="appointment_input"
                placeholder="Last Name"
                name="lastName"
                value={successMessage ? '' : formData.lastName}
                onChange={handleInputChange}
            />
            <input
                className="appointment_input"
                placeholder="Phone Number"
                name="phone"
                value={successMessage ? '' : formData.phone}
                onChange={handleInputChange}
            />
            <input
                className="appointment_input"
                placeholder="Email"
                name="email"
                value={successMessage ? '' : formData.email}
                onChange={handleInputChange}
            />
            <input
                className="appointment_input"
                placeholder="Comments"
                name="comments"
                value={successMessage ? '' : formData.comments}
                onChange={handleInputChange}
            />

            <select
                className="appointment_input"
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
            >
                <option value="">Select a car</option>
                {carListings.map(car => (
                    <option key={car.car_id} value={car.car_id}>
                        {car.make} {car.model} ({car.year})
                    </option>
                ))}
            </select>
            {successMessage && <p className="successMessage">{successMessage}</p>}
            <button className="appointment_button" onClick={handleSubmit}>Send</button>
        </div>
    );
}

export default AppointmentCard;
