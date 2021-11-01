import * as types from "../types";

const INITIAL_STATE = {
  moviesList: [],
  favoriteList: [],

};

export function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}

  
export function favoriteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.ADD_FAVORITE:
        return {
          ...state,
          favoriteList: [...state.favoriteList, action.payload],
        };
    case types.REMOVE_FAVORITE:
        return{
            ...state,
            favoriteList: [...state.favoriteList],
        };
      default:
        return state;
    }
  }

