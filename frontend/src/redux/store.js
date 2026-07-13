import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import authApi from "../features/auth/services/authApi";

const store = configureStore({
    reducer:{
       [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;