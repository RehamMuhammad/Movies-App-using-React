import { combineReducers } from "redux";

import  {moviesReducer,favoriteReducer} from "./moviesReducers";

export default combineReducers({
    movies : moviesReducer,
    favorite : favoriteReducer
})