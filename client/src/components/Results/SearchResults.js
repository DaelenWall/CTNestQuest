import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../pages/Counties/Counties.css";

const SearchResults = () => {
  const location = useLocation();

  if (location.state.criteriaFilter.length === 0) {
    return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals that fit your criteria.</p>
      </div>
    );
  } else {
    return (
      <div className="main-container my-1">
        {location.state.criteriaFilter.map((property) => (
          <Link to={`/single-property/${property._id}`} key={property._id}>
            <div className="property-container">
              <img src={`/images/${property.images[0].imageText}`} alt={property.address} />
              <div className="property-details">
                <h3>${property.price}/mo</h3>
                <h4>
                  {property.bedroomCount} Bedroom {property.bathroomCount} Bath
                </h4>
                <h4>{property.address}</h4>
                <h4>{property.propertyType}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

export default SearchResults;

