import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries';
import { Link } from 'react-router-dom';

const NewLondonCounty = () => {

  const { loading, data } = useQuery(GET_PROPERTIES);

  if (!data) {
    return <p>No data available to show.</p>;
  }

  const NewLondonProperties = data?.properties.filter(
    (property) => property.county.toLowerCase() === 'New London'.toLowerCase()
  );
  
  if (NewLondonProperties.length === 0) {
  return (
      <div className="container my-1">
        <p>Sorry, There are no available rentals in New London County at this time, please come back again soon!</p>
      </div>
    );
  } else {
    return (
      <div className="main-container my-1">
        {NewLondonProperties.map((property) => (
          <Link to={`/single-property/${property._id}`}>
            <div className="property-container">
              <img src={`/images/${property.image}`} alt={property.address} />
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

export default NewLondonCounty;