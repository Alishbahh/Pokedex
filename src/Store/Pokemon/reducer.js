import {
  ADD_TO_FAV,

  REMOVE_FROM_FAV,

} from "./actionTypes";

const INIT_STATE = {
  favourites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,

        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,

        favourites: state.favourites.filter((fav) => fav.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
