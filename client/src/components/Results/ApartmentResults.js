import React from "react";
import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";

const ApartmentResults = () => {
  //use location from navigate RentApartment page
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
        property.propertyType === "Apartment" &&
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
          <Link to={`/single-property/${property._id}`}>
          <div className="property-container">
            <img src={`/images/${property.images[0].imageText}`} alt={property.address} />
            <div key={property.id} className="property-details">
              <h3> ${property.price}/mo</h3>
              <h4>
                {property.bedroomCount} Bedroom {property.bathroomCount} Bath
              </h4>
                <h4>{property.address}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  }
};

export default ApartmentResults;
