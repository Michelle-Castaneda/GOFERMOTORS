import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import "./App.css";
import AuthContext from './store/authContext';
import BodyTypeSelector from './Components/BodyTypeSelector/BodyTypeSelector';
import Contact from './Components/ContactUs/ContactUs';
import Financing from './Components/Financing/Financing';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import Inventory from './Components/Inventory/Inventory';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import QuickSearch from './Components/QuickSearch/QuickSearch';

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
          <Route key="home" path="/" element={<Home />} />
          <Route key="inventory" path="/inventory" element={<Inventory />} />
          <Route key="bodyType" path="/inventory/:body_type" element={<BodyTypeSelector />} />
          <Route key="contact" path="/contact" element={<Contact />} />
          <Route key="privacyPolicy" path="/privacyp" element={<PrivacyPolicy />} />
          <Route key="financing" path="/financing" element={<Financing />} />
          <Route key="quickSearch" path="/quickSearch" element={<QuickSearch />} />
        </Routes>
        <Footer />
      </div>
    </SimpleBar>
  );
}

export default App;
