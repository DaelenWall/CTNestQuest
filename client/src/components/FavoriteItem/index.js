import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_FAVORITES, UPDATE_FAVORITE_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const FavoriteItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isFavorited, setIsFavorited] = useState(true);

  const removeFromFavorites = () => {
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
      removeFromFavorites();
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
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <input
            type="number"
            placeholder="0"
            value={item.favoriteQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromFavorites(item)}
          >
            ❌
          </span>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItem;
