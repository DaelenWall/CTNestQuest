import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries';
import { Link } from 'react-router-dom';

const TollandCounty = () => {

  const { loading, data } = useQuery(GET_PROPERTIES);

  if (!data) {
    return <p>No data available to show.</p>;
  }

  const tollandProperties = data?.properties.filter(
    (property) => property.county.toLowerCase() === 'Tolland'.toLowerCase()
  );
  
  if (tollandProperties.length === 0) {
  return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals in Tolland County at this time, please come back again soon!</p>
      </div>
    );
  } else {
    return (
      <div className="main-container my-1">
        {tollandProperties.map((property) => (
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

export default TollandCounty;