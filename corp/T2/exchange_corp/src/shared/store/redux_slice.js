import {createSlice} from '@reduxjs/toolkit';

// 값이 필요해
const initialState = {
  exchange_arr: {},
  countryVal: "USD",
  inputVal: ""
};

const ExchangeSlice = createSlice({
  name : "EXCHANGE",
  initialState: initialState,
  reducers: {
    addExchange: (state, action) => {
        const { country, date, change, from } = action.payload;
        console.log(from, "country>> ", country);
        if (country == undefined){return;}
        const existCheck = Object.keys(state.exchange_arr).indexOf(country);

        if (existCheck !== -1) {
          delete state.exchange_arr[country];
        }

        state.exchange_arr = { [country]: { date, change }, ...state.exchange_arr };
    },

    setCountry: (state, action) => {
        state.countryVal = action.payload;
    },

    setInput: (state, action) => {
      state.inputVal = action.payload;
    }

  },
});


export const {addExchange, setCountry, setInput} = ExchangeSlice.actions;

export default ExchangeSlice.reducer;