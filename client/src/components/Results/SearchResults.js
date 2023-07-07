import React from "react";
import { Link } from 'react-router-dom';
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
            <div className="container my-1">
                {location.state.criteriaFilter.map((property) => (
                    <Link to={`/single-property/${property._id}`}>
                    <div className="property-container">
                  <img
                    src={`/images/${property.image}`}
                    alt={property.address}
                  />
                  <div key={property.id} className="property-details">
                    <h3>Price: ${property.price}/mo</h3>
                    <p>Bedrooms: {property.bedroomCount}</p>
                    <p>Bathrooms: {property.bathroomCount}</p>
                    <p>Address: {property.address}</p>
                  </div>
                  </div>
                  </Link>
                ))}
            </div>
        );
    }

};

export default SearchResults;