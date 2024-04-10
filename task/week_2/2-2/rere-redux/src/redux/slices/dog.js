import {createSlice} from "@reduxjs/toolkit";

//리덕스툴킷은 개발자 편하라고 만들어준 거예요
//개발자는 길게 쓰는 거 귀찮아요
//원본값 변하지 않게 신경쓰는 거 귀찮아요
//우리가 immer 넣어줄게 / 불변성을 지키면서 값을 지켜주는 라이브러리

const dogSlice = createSlice({
    name: "dog",
    initialState: {dog_arr:["바둑이", "뽀비"]},
    reducers: {
        addDog: (state, action) => {
            state.dog_arr.push(action.payload);
            //state.dog_arr = [...state.dog_arr, action.cat_name];
        }
    }
});

export const {addDog} = dogSlice.actions;
export default dogSlice.reducer;