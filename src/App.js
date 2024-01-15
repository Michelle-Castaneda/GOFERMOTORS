import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useContext, useState}from 'react';
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';


import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Inventory from "./Components/Inventory/Inventory";
import Contact from "./Components/ContactUs/ContactUs"
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Financing from "./Components/Financing";
import Footer from "./Components/Footer/Footer";
import AuthContext from "./store/authContext";


function App() {
  const { state } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
    <div className="App">
      <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} openModal={openModal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyp" element={<PrivacyPolicy />} />
        <Route path="/financing" element={<Financing />} />
      </Routes>
      <Footer />
    </div>
    </SimpleBar>
  );
}

export default App;
