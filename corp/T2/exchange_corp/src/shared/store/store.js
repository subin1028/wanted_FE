

import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";

import redux_slice from "./redux_slice";

const rootReducer = combineReducers({
  redux_slice,
});


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(rootReducer, enhancer);

const store = configureStore({reducer: rootReducer});

export default store;