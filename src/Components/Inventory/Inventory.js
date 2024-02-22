import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from 'react-router-dom';
import styles from "./Inventory.module.css";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import AuthContext from "../../store/authContext";
// import Modal from "../Modal/Modal";
// import AddInventoryForms from "./AddInventoryForms";

function Inventory() {
  const { state, dispatch } = useContext(AuthContext);
  const { body_type: bodyType } = useParams();
  const location = useLocation();

  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [soldStatus, setSoldStatus] = useState("Not Sold");
  const [soldSearch, setSoldSearch] = useState("");

  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  useEffect(() => {
    getCars();
  }, [state.userId]);

  useEffect(() => {
    if (soldStatus === 'Sold') {
      setSoldSearch('true');
    } else if (soldStatus === 'Not Sold') {
      setSoldSearch('false');
    }
  }, [soldStatus]);

  function getCars() {
    axios
      .get("http://localhost:4000/car_inventory")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars data: ", error));
  }

  const carResults = cars
    .filter((car) => {
      const carMake = car.make.toLowerCase();
      const carModel = car.model.toLowerCase();
      const carYear = +car.year;
      const makeSearch = make.toLowerCase();
      const modelSearch = model.toLowerCase();
      const statusSearch = String(car.sold);

      return (
        (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carYear === +year || !year) &&
        (soldStatus === '' || statusSearch === soldSearch)
      );
    })
    .map((car) => (
      <InventoryCard key={car.car_id} car={car} getCars={getCars} />
    ));

  return (
    <div className={styles.inventory_container}>
      <h3 className={styles.title}>
        {state.isadmin === true || state.isadmin === "true"
          ? " ** Admin Inventory View ** "
          : "Quality Used Vehicles in Alamo TX"
        }   
      </h3>

      <SearchBar
        cars={cars}
        setMake={setMake}
        make={make}
        setYear={setYear}
        year={year}
        model={model}
        setModel={setModel}
        soldStatus={soldStatus}
        setSoldStatus={setSoldStatus}
      />

      {/* {state.token && state.isadmin === true || state.isadmin === "true" && (
        <button className="add-inventory" onClick={openModal}>Add Inventory</button>
      )}

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddInventoryForms cars={cars} getCars={getCars} isOpen={isModalOpen} closeModal={closeModal} />
      </Modal> */}

      <div className={styles.card_container}>{carResults}</div>
    </div>
  );
}

export default Inventory;
