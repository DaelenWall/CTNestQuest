import React from "react";

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
                    <div key={property.id} className="property-container">
                        <h3>Price: ${property.price}/mo</h3>
                        <p>Bedrooms: {property.bedroomCount}</p>
                        <p>Bathrooms: {property.bathroomCount}</p>
                        <p>Address: {property.address}</p>
                        <p>County: {property.county}</p>
                    </div>
                ))}
            </div>
        );
    }

};

export default SearchResults;