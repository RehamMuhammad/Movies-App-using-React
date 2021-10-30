import * as types from "../types";

const INITIAL_STATE = {
  moviesList: [],
};

export default function moviesReducer(state = INITIAL_STATE, action) {
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