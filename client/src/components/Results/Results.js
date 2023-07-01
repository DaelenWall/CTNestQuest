import React from "react";

import { useLocation } from "react-router-dom";

const Results = () => {
  //use location from navigate RentHouse page
  const location = useLocation();
  console.log(location.state.properties);

  //filters has a state and filters property
  const filters = location.state.filters;

  //getting filtered values by themselves for filteringData
  const { minPrice, maxPrice, bedrooms, bathrooms, county } = filters;

  //modify this to filter location.state.properties
  let filteredData = [];
  if (location.state.properties) {
    filteredData = location.state.properties.filter((property) => {
      return (
        property.propertyType === "House" &&
        property.price >= minPrice &&
        property.price <= maxPrice &&
        property.bedroomCount >= bedrooms &&
        property.bathroomCount >= bathrooms &&
        property.county.toLowerCase() === county.toLowerCase()
      );
    });
  }

  // then in return swap location states to filteredData for your map
  if (filteredData.length === 0) {
    return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals that fit your criteria.</p>
      </div>
    );
  } else {
    return (
      <div className="container my-1">
        {filteredData.map((property) => (
          <div key={property.id} className="property-container">
            <h3>Price: ${property.price}/mo</h3>
            <p>Bedrooms: {property.bedroomCount}</p>
            <p>Bathrooms: {property.bathroomCount}</p>
            <p>Address: {property.address}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default Results;
