import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import FavoriteItem from '../../components/FavoriteItem';

function Favorite() {

  const { data } = useQuery(QUERY_ME, {
    variables: {
      username: 'joshymol',
    }
  });
  let me;

  if (data) {
    me = data.me;
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(me.firstName);
  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Properties</Link>

        {me ? (
          <>
            <h2>
              Favorites for {me.firstName} {me.lastName}
            </h2>
            {me.favorites.map((favorite) => (
              <div key={favorite._id} className="my-2">
                <h3>
                  {new Date(parseInt(favorite.favoriteDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {favorite.property.map((property) => (
                    <FavoriteItem key={property._id} item={property} />
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
