import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  //use location from navigate from Home page
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
          <Link to={`/single-property/${property._id}`}>
            <div className="property-container">
              <img src={`/images/${property.image}`} alt={property.address} />
              <div key={property.id} className="property-details">
                <h3> ${property.price}/mo</h3>
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
