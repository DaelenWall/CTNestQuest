import { useReducer } from 'react';
import {
  ADD_TO_FAVORITES,
  UPDATE_FAVORITE_QUANTITY,
  REMOVE_FROM_FAVORITES,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorited: true,
        favorites: [...state.favorites, action.property],
      };

    case UPDATE_FAVORITE_QUANTITY:
      return {
        ...state,
        favorited: true,
        favorites: state.favorites.map((property) => {
          if (action._id === property._id) {
            return {
              ...property,
              purchaseQuantity: action.purchaseQuantity,
            };
          }
          return property;
        }),
      };

    case REMOVE_FROM_FAVORITES:
      let newState = state.favorites.filter((property) => {
        return property._id !== action._id;
      });

      return {
        ...state,
        favorited: newState.length > 0,
        favorites: newState,
      };
      
    default:
      return state;
  }
}

export function usePropertyReducer(initialState) {
  return useReducer(reducer, initialState);
}
