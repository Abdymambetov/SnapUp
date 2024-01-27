import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import searchReducer from "./searchSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        search: searchReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer
    }
})

export default store