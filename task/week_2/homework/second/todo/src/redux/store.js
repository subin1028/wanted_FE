import { combineReducers } from "redux";
import todo from "./slices/todo";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todo,
});

const store = configureStore({reducer: rootReducer,});

export default store;