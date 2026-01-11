import {configureStore} from "@reduxjs/toolkit";
import {productApi} from '../apis/productApi';
import {LoginApi} from '../apis/loginApi'
import cartReducer from "./cartSlice";

export const store = configureStore({

    reducer: {
        [productApi.reducerPath]:productApi.reducer,
        [LoginApi.reducerPath]:LoginApi.reducer,
        cart: cartReducer,


    },
    middleware:(getDefaultMiddleware)=>(      
        (getDefaultMiddleware().concat(productApi.middleware, LoginApi.middleware))
)
})