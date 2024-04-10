/*//스토어가 뭐야
//스토어는 값이랑 그걸 바꿔주는 얘로 구성이 되어 있지

//context는 저장소를 여러 개 만들어도 됩니다.
//근데 redux는 단일 저장소를 따라요
//스토어가 무조건 한 개
//리듀서를 여러 개 만들게 된다면 하나로 묶어줘야해
//미들웨어도 여러 개 쓸거면 하나로 묶어줘야해

import {createStore, combineReducers} from "redux";
import cat from "./modules/cat";
import dog from "./slices/dog";

//self_cat자리는 모듈 이름 자리이기 때문에 맘대로 지어도 됩니다.
const rootReducer = combineReducers({cat, dog});
// const store = createStore(reducer, middleware);
const store = createStore(rootReducer);
export default store;

//provider는 index.js에서 해줬습니다.*/

import { combineReducers } from "redux";
import dog from "./slices/dog";
import cat from "./modules/cat";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    dog,
    cat,
});

const store = configureStore({reducer: rootReducer,
    //enhance: 미들웨어 묶음,,
});

export default store;