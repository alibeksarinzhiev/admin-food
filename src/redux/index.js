import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./product";

const store = configureStore({
    reducer:{
        [productSlice.reducerPath]:productSlice.reducer
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productSlice.middleware),
})

export default store