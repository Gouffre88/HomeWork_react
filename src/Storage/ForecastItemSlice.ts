import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    forecastItem: [],
};

export const forecastItemSlice = createSlice({
    name: 'ForecastItem',
    initialState: initialState,
    reducers: {
        setForecastItem: (state, action) => {
            state.forecastItem = action.payload;
        }
    }
});

export const {setForecastItem} = forecastItemSlice.actions;
export const forecastItemReducer = forecastItemSlice.reducer;