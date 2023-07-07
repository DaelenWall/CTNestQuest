import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_FAVORITES, UPDATE_FAVORITE_QUANTITY } from "../../utils/actions";
import { QUERY_ME } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";

const FavoriteItem = ({ item }) => {
  const [, dispatch] = useStoreContext();
  const [isFavorited, setIsFavorited] = useState(true);
 
  const removeFromFavorites = item => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      _id: item._id
    });
    idbPromise('favorite', 'delete', { ...item });
    setIsFavorited(false);
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        _id: item._id
      });
      idbPromise('favorite', 'delete', { ...item });
      setIsFavorited(false);
    } else if (!isFavorited) {
      dispatch({
        type: UPDATE_FAVORITE_QUANTITY,
        _id: item._id,
        favoriteQuantity: parseInt(value)
      });
      idbPromise('favorite', 'put', { ...item, favoriteQuantity: parseInt(value) });
      setIsFavorited(true);
    }
  }
}

function Favorite({ item }) {

  const { data } = useQuery(QUERY_ME);
  const me = data?.me;


  useEffect(() => {
    console.log(me);
  }, [me]);

  const [, dispatch] = useStoreContext();
  const [isFavorited, setIsFavorited] = useState(true);
 
  const removeFromFavorites = item => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      _id: item._id
    });
    idbPromise('favorite', 'delete', { ...item });
    setIsFavorited(false);
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        _id: item._id
      });
      idbPromise('favorite', 'delete', { ...item });
      setIsFavorited(false);
    } else if (!isFavorited) {
      dispatch({
        type: UPDATE_FAVORITE_QUANTITY,
        _id: item._id,
        favoriteQuantity: parseInt(value)
      });
      idbPromise('favorite', 'put', { ...item, favoriteQuantity: parseInt(value) });
      setIsFavorited(true);
    }
  }

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
