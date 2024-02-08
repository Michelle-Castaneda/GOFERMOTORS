import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import styles from "./Inventory.module.css";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import AuthContext from "../../store/authContext";
import Modal from "../Modal/Modal";
import AddInventoryForms from "./AddInventoryForms";
import QuickSearch from "../QuickSearch/QuickSearch";
import { useLocation } from 'react-router-dom';

  

function Inventory() {
  const { state, dispatch } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [soldStatus, setSoldStatus] = useState("Not Sold");
  const [soldSearch, setSoldSearch] = useState("");
  const { body_type: bodyType } = useParams();
  // const [userdata, setUserData] = useState();
  // const [filteredCars, setFilteredCars] = useState([]);
  const location = useLocation();
  const filteredCarsFromLocation = location.state?.filteredCars || [];
  const [filteredCars, setFilteredCars] = useState(location.state?.filteredCars || []);
  const [showQuickSearch, setShowQuickSearch] = useState(false);


  // useEffect(() => {
  //   if (state.userId) {
  //     axios
  //       .get(`http://localhost:4000/users/${state.username}`)
  //       .then((response) => {
  //         setUserData(response.data);
  //         console.log(`RESPONSE USER DATA ${response.data}`);
  //       })
  //       .catch((error) => {
  //         console.error("Error get request for users:", error.response.data);
  //       });
  //   }
  // }, state.userId);
  // console.log(userdata);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function getCars() {
    axios
      .get("http://localhost:4000/car_inventory")
      .then((response) => {
        // console.log("Cars Data", response.data);
        setCars(response.data);
        // console.log('#####')
        // console.log(state)
      })
      .catch((error) => {
        console.error("Error fetching cars data: ", error);
      });
  }
  useEffect(() => {
    getCars();
  }, [state.userId]);
  // console.log("Cars Map Data", cars);

  useEffect(() => {
    if (soldStatus === 'Sold') {
      setSoldSearch('true');
    } else if (soldStatus === 'Not Sold') {
      setSoldSearch('false');
    }
  }, [soldStatus, setSoldSearch]);

  
  const carResults = cars
    .filter((car) => {
      const carMake = car.make.toLowerCase();
      const carModel = car.model.toLowerCase();
      const carYear = +car.year;
      const makeSearch = make.toLowerCase();
      const modelSearch = model.toLowerCase();
      const statusSearch = String(car.sold);

      const handleQuickSearch = (searchParams) => {
        // console.log("Quick Search Parameters:", searchParams);
        setMake(searchParams.make);
        setModel(searchParams.model);
        setYear(searchParams.year);
        setFilteredCars(searchParams);

        const carResults = filteredCars.map((car) => (
          <li key={car.id}>
            {car.make} - {car.model} - {car.year} - ${car.price}
          </li>
        ));
        

      };

      return (
        (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carYear === +year || !year) && soldStatus !== '' ?
        (statusSearch === soldSearch) : (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carYear === +year || !year)
      );
    })
    .map((car) => (
      <InventoryCard
        key={car.car_id}
        car={car}
        getCars={getCars}
      />
    ));
  return (
    <div className={styles.inventory_container}>
      <h3 className={styles.title}>
        { state.isadmin === true || state.isadmin === "true" ? " ** Admin Inventory View ** "
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

      {/* <QuickSearch/> */}
      
      {state.token && state.isadmin === true || state.isadmin === "true" ? (
       <button className="add-inventory" onClick={openModal}>Add Inventory</button>
        // : ''}
      ) : ''}
     <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddInventoryForms cars={cars} getCars={getCars} isOpen={isModalOpen} closeModal={closeModal}></AddInventoryForms>
      </Modal>
      <div className={styles.card_container}>{carResults}</div>

      <p>Display content for {bodyType} vehicles here</p>
    </div>
   
  );
}

export default Inventory;
