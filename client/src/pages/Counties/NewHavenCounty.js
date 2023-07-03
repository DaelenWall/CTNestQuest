import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries';

const NewHavenCounty = () => {

  const { loading, data } = useQuery(GET_PROPERTIES);

  if (!data) {
    return <p>No data available to show.</p>;
  }

  const newHavenProperties = data?.properties.filter(
    (property) => property.county.toLowerCase() === 'New Haven'.toLowerCase()
  );
  
  if (newHavenProperties.length === 0) {
  return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals in New Haven County at this time, please come back again soon!</p>
      </div>
    );
  } else {
    return (
      <div className="container my-1">
        {newHavenProperties.map((property) => (
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

export default NewHavenCounty;