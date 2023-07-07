import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_FAVORITES, UPDATE_FAVORITE_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function FavoriteItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
  } = item;

  const { property } = state

const addToFavorites = () => {
  const itemInFavorites = property.find((propertyItem) => propertyItem._id === _id)
  if (itemInFavorites) {
    dispatch({
      type: UPDATE_FAVORITE_QUANTITY,
      _id: _id,
      favoriteQuantity: parseInt(itemInFavorites.favoriteQuantity) + 1
    });
    idbPromise('favorites', 'put', {
      ...itemInFavorites,
      favoriteQuantity: parseInt(itemInFavorites.favoriteQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_TO_FAVORITES,
      product: { ...item, purchaseQuantity: 1 }
    });
    idbPromise('favorites', 'put', { ...item, favoriteQuantity: 1 });
  }
}

return (
  <div className="card px-1 py-1">
    <Link to={`/property/${_id}`}>
      <img
        alt={name}
        src={`/images/${image}`}
      />
      <p>{name}</p>
    </Link>
    <div>
      <span>${price}</span>

      {/* ADD TO PROPERTY.JS */}
    </div>
    <button onClick={addToFavorites}>Add to Favorites</button>
  </div>
 
);
}

export default FavoriteItem;