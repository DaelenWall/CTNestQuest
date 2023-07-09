import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import use query and usequery from apollo client
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "../../utils/queries";

const RentHouseForm = () => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [county, setCounty] = useState("");

  const { loading, data } = useQuery(GET_PROPERTIES);

  const properties = data?.properties || {};
  console.log(properties);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "minPrice":
        setMinPrice(value);
        break;
      case "maxPrice":
        setMaxPrice(value);
        break;
      case "bedroom":
        setBedrooms(value);
        break;
      case "bathroom":
        setBathrooms(value);
        break;
      case "county":
        setCounty(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //passing properties over to results js
    navigate("/results", {
      state: {
        properties,
        filters: {
          minPrice,
          maxPrice,
          bedrooms,
          bathrooms,
          county,
        },
      },
    });
  };

  return (
    <div className="container my-1">
      <div className="background-image">
        <img src="/images/background-image-3.jpeg" alt="Login House" />
        <div className="house-form">
          <h2>What are you looking for in your <span className="last-word">HOUSE?</span>
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="minPrice">Minimum Price:</label>
              <input
                placeholder="$1400"
                name="minPrice"
                type="minPrice"
                id="minPrice"
                onChange={handleChange}
                value={minPrice}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="maxPrice">Maximum Price:</label>
              <input
                placeholder="$2400"
                name="maxPrice"
                type="maxPrice"
                id="maxPrice"
                onChange={handleChange}
                value={maxPrice}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="bedroom">Number of Bedrooms:</label>
              <input
                placeholder="2"
                name="bedroom"
                type="bedroom"
                id="bedroom"
                onChange={handleChange}
                value={bedrooms}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="bathroom">Number of Bathrooms:</label>
              <input
                placeholder="2"
                name="bathroom"
                type="bathroom"
                id="bathroom"
                onChange={handleChange}
                value={bathrooms}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="county">CT County:</label>
              <input
                placeholder="Fairfield"
                name="county"
                type="county"
                id="county"
                onChange={handleChange}
                value={county}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentHouseForm;
