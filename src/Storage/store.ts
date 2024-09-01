import { configureStore } from "@reduxjs/toolkit";
import {forecastItemReducer}  from "./ForecastItemSlice";

const store = configureStore ({
    reducer: {
        forecastItemStore: forecastItemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;