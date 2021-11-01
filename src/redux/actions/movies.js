import * as types from "../types";
import axiosInstance from "./../../network/axiosConfig";

export const getMovies = () => (dispatch) => {
  return axiosInstance.get("/").then((res) =>
    dispatch({
      type: types.GET_MOVIES,
      payload: res.data.results,
    })
  );
};

export const addToFavorites = (data) => {
  return {
    type: types.ADD_FAVORITE,
    payload: data,
  };
};

export const removeFavorites = (data) => {
  return {
    type: types.REMOVE_FAVORITE,
    payload: data,
  };
};
