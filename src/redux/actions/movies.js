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
