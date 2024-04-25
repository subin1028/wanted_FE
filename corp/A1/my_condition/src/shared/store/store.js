import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import redux_slice from "./redux_slice";

const rootReducer = combineReducers({
  redux_slice,
});

const store = configureStore({reducer: rootReducer});

export default store;