import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries';
import { Link } from 'react-router-dom';

const MiddlesexCounty = () => {

  const { loading, data } = useQuery(GET_PROPERTIES);

  if (!data) {
    return <p>No data available to show.</p>;
  }

  const middlesexProperties = data?.properties.filter(
    (property) => property.county.toLowerCase() === 'Middlesex'.toLowerCase()
  );
  
  if (middlesexProperties.length === 0) {
  return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals in Middlesex County at this time, please come back again soon!</p>
      </div>
    );
  } else {
    return (
      <div className="container my-1">
        {middlesexProperties.map((property) => (
          <Link to={`/single-property/${property._id}`}>
          <img
            src={`/images/${property.image}`}
            alt={property.address}
          />
          <div key={property.id} className="property-container">
            <h3>Price: ${property.price}/mo</h3>
            <p>Bedrooms: {property.bedroomCount}</p>
            <p>Bathrooms: {property.bathroomCount}</p>
            <p>Address: {property.address}</p>
          </div>
          </Link>
        ))}
      </div>
    );
  }
};

export default MiddlesexCounty;