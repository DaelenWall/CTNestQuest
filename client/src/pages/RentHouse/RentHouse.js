import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import seeds from '../../../../server/seeds/propertySeeds.json';

const RentHouseForm = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [county, setCounty] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'minPrice':
        setMinPrice(value);
        break;
      case 'maxPrice':
        setMaxPrice(value);
        break;
      case 'bedroom':
        setBedrooms(value);
        break;
      case 'bathroom':
        setBathrooms(value);
        break;
      case 'county':
        setCounty(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filteredData = seeds.filter((property) => {
        return (
            property.propertyType === 'House' &&
            property.price >= minPrice &&
            property.price <= maxPrice &&
            property.bedroomCount === bedrooms &&
            property.bathroomCount === bathrooms &&
            property.county.toLowerCase() === county.toLowerCase()
        );
    });

    navigate('/results', { state: { filteredHouses: filteredData }});
  };

  return (
    <div className="container my-1">
      <div className="house-form">
        <h2>What are you looking for in your house?</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="minPrice">Minimum Price:</label>
            <input
              placeholder="$1400"
              name="minPrice"
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="text"
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
  );
};

export default RentHouseForm;