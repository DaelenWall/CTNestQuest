import React from 'react';

import 

const Results = ({ location }) => {
  const { filteredHouses } = location.state;

  return (
    <div className="container my-1">
      {filteredHouses.length === 0 ? (
        <p>No results found.</p>
      ) : (
        filteredHouses.map((property) => (
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