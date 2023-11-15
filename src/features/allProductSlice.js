import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async() => {
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    return data.products;
});

const initialState = {
    products: [],
    loading: false,
        error: null,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncProducts.pending, (state) => {
            
            state.loading = true;
        })

        .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })

        .addCase(fetchAsyncProducts.rejected, (state) => {
            
            state.loading = false;
        })

       
    }
});



export const getAllProducts = (state) => state.product.products;

export default productSlice.reducer;