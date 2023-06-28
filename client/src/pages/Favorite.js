import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function Favorite() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Properties</Link>

        {user ? (
          <>
            <h2>
              Favorites for {user.firstName} {user.lastName}
            </h2>
            {user.favorites.map((favorite) => (
              <div key={favorite._id} className="my-2">
                <h3>
                  {new Date(parseInt(favorite.favoriteDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {favorite.property.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/property/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Favorite;
