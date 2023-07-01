import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';


const Results = () => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [county, setCounty] = useState('');

  //use location from navigate RentHouse page 
  const location = useLocation();
  console.log(location.state.properties);

  //modify this to filter location.state.properties 
  const filteredData = properties.filter((property) => {
    return (
      property.propertyType === 'House' &&
      property.price >= minPrice &&
      property.price <= maxPrice &&
      property.bedroomCount === bedrooms &&
      property.bathroomCount === bathrooms &&
      property.county.toLowerCase() === county.toLowerCase()
    );
  });

  // then in return swap location states to filteredData for your map 
  return (
    <div className="container my-1">
      {location.state.length === 0 ? (
        <p>No results found.</p>
      ) : (
        location.state.properties.map((property) => (
          <div key={property.id} className="property-container">
            <h3>Price: ${property.price}/mo</h3>
            <p>Bedrooms: {property.bedroomCount}</p>
            <p>Bathrooms: {property.bathroomCount}</p>
            <p>Address: {property.address}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Results;