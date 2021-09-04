// Import Dependencies
import {combineReducers} from "redux";

// Import Reducers
import appReducer from "./app";
import photosReducer from "./photos";
import searchReducer from "./search";

export default combineReducers({
    appReducer,
    photosReducer,
    searchReducer
});
