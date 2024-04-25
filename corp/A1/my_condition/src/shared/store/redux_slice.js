import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  date_arr: {}
  //{id: "1", date: "2024-04-24", rate:0}
};

const RatingSlice = createSlice({
  name : "RATING",
  initialState: initialState,
  reducers: {
    addRating: (state, action) => {
        action.payload.forEach(item => {
            state.date_arr[item.id] = item;
          });
    }
  },
});


export const {addRating} = RatingSlice.actions;

export default RatingSlice.reducer;