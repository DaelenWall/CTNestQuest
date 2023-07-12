import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../src/components/Nav/index.css';
import "../src/components/Nav/"
import App from './App';
import "../src/pages/Home/Home.css";
import "../src/pages/Signup/Signup.css";
import "../src/pages/Login/Login.css";
import "../src/pages/RentHouse/RentHouse.css";
import "../src/pages/RentApartment/RentApartment.css";
import "./pages/Counties/Counties.css";
import "../src/pages/Property/addProperty.css";
import "../src/pages/Property/Property.css";
import "../src/pages/MyListings/MyListings.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);