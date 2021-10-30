import { combineReducers } from "redux";

import moviesReducer from "./moviesReducers";

export default combineReducers({
    movies : moviesReducer
})