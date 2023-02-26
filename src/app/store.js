import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { jsonServerApi } from "./services/jsonServerApi";

export const Store = configureStore({
    reducer:{
        [jsonServerApi.reducerPath]: jsonServerApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(jsonServerApi.middleware)
})