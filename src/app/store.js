import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/allProductSlice";
import categoryReducer from "../features/categorySlice";
import cartReducer from '../features/cartSlice';
import searchReducer from "../features/searchSlice";


export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    allCart: cartReducer,
    search: searchReducer,
    
  },
})