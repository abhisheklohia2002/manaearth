import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import AuthSlice from "./AuthSlice";
const Store = configureStore({
    reducer:{
ProductSlice,
AuthSlice
    }
})
export default Store;
