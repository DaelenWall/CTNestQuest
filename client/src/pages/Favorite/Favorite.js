import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import FavoriteItem from '../../components/FavoriteItem';

function Favorite() {

  const { data } = useQuery(QUERY_ME);
  const me = data?.me;


  useEffect(() => {
    console.log(me);
  }, [me]);
  
  return (
    <div className="container my-1">

      {me && (
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
      )}
    </div>
  );
}

export default Favorite;
