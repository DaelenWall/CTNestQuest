import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import FavoriteItem from '../../components/FavoriteItem';

function Favorite() {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;

  return (
    <div className="container my-1">
      {me && (
        <>
        {console.log(me)}
          <h2>
            Favorites for {me.firstName} {me.lastName}
          </h2>
          {loading?"still loading": me.favorites.map((favorite) => (
            <div key={favorite.address} className="my-2">

            </div>

          ))}
        </>

      )}
    </div>
  );
}

export default Favorite;
