import React from "react";
import "./Appointment.css";
import AppointmentCard from "./AppointmentCard";
import test_drive from "./test_drive.jpg";
import test_drive2 from "./test_drive2.jpg";

function Appointment () {
    return (
       <div className="appointment_container">
         <div className="inventory_section">
        <h2 className="footer_question">Request your Appointment</h2>
        <p className="appointment_p">A sales agent will get in touch as soon as possible</p>
        <p className="appointment_p">You can also send an email with your inquiries to: sales@gofermotors.com</p>
        <AppointmentCard />
        </div>
        
        <div className="appointment_pics_container">
        <img className="appointment_pic1" src={test_drive}/>
        <img className="appointment_pic2" src={test_drive2}/>
        </div>
       </div>

    )
}

export default Appointment;