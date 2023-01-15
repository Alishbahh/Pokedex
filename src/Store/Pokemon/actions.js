import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./actionTypes";

export const addToFav = (Pokemon) => {
  return {
    type: ADD_TO_FAV,
    payload: Pokemon,
  };
};

export const removeFromFav = (id) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: id,
  };
};
