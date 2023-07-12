import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Link } from 'react-router-dom';

function Favorite() {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;

  return (
    <div className="main-container my-1">
      {me && (
        <>
          {console.log(me)}
          <h2>
            Listings for {me.firstName} {me.lastName}
          </h2>
          <div className="mylisting-outer-container">
          {me.property.map((myproperty) => (
          <Link to={`/single-property/${myproperty._id}`}>
          <div className="mylisting-container">
            <img src={`/images/${myproperty.images[0].imageText}`} alt={myproperty.address} />
            <div key={myproperty.id} className="mylisting-details">
              <h3> ${myproperty.price}/mo</h3>
              <h4>
                {myproperty.bedroomCount} Bedroom {myproperty.bathroomCount} Bath
              </h4>
                <h4>{myproperty.address}</h4>
            </div>
          </div>
        </Link>
          ))}
          </div>
        </>

      )}
    </div>
  );
}

export default Favorite;