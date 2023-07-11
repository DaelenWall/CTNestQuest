import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Link } from 'react-router-dom';

import "../Favorite/Favorite.css";

function Favorite() {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;

  return (
    <div className="main-container my-1">
      {me && (
        <>
          {console.log(me)}
          <h2>
            Favorites for {me.firstName} {me.lastName}
          </h2>
          <div className="favorite-outer-container">
          {me.favorites.map((favorite) => (
          <Link to={`/single-property/${favorite._id}`}>
          <div className="favorite-container">
            <img src={`/images/${favorite.image}`} alt={favorite.address} />
            <div key={favorite.id} className="favorite-details">
              <h3> ${favorite.price}/mo</h3>
              <h4>
                {favorite.bedroomCount} Bedroom {favorite.bathroomCount} Bath
              </h4>
                <h4>{favorite.address}</h4>
                <h4>{favorite.propertyType}</h4>
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
