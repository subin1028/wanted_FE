// // 버튼으로 고양이 배열 늘리기
// // 배열 값 유지하기

// const initialState = {
//     cat_arr : ["펄이", "루비"],
// }; //값

// // 값을 바꿀 수 있게 행위를 적어줘야한다. = 값을 바꾸는 함수
// // 리덕스 특징 / 바꾸는 행위 그 자체를 이름 붙여주어야 한다 = 액션

// const ADD = "cat/ADD"; //액션의 이름

// // 우리는 "cat/ADD"를 부르면, state에서 cat_arr를 찾아서 "고양이"를 넣어줄거예요
// //액션 생성 함수

// export const addCat = (cat_name) => {
//     //cat_arr에다가 추가할 값: cat
//     return {type: ADD, cat: cat_name};
// }
// //여기까지가 뭘 할 때 뭐를 해


// //리듀서 안에서 이 처리가 일어나야 하기 때문에
// //리듀서 만들어주기(함수)
// //리덕스는 화살표 함수로 만드는 걸 좋아하지 않아요
// export default function (state = initialState, action) {
//     // 액션을 보고 액션 안에 타입 있는거
//     // 어떤 행동할지 정하기
//     // 조건대로 행동하라고 시키기
//     //if, case 가능
//     if (action.type === "cat/ADD"){
//         return {cat_arr: [...state.cat_arr, action.cat]};
//     }
//     return state;
// }

import {createSlice} from "@reduxjs/toolkit"

const catSlice = createSlice({
    name: "cat",
    initialState: {cat_arr:["펄이", "루비"]},
    reducers: {
        addCat: (state, action) => {
            state.cat_arr.push(action.payload);
    },

    removeCat: (state, action) => {
        state.cat_arr.pop();
    }
}
});

export const {addCat, removeCat} =catSlice.actions;
export default catSlice.reducer;