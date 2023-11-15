import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchProducts: [],
    loading: false,
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncSearchProduct.pending, (state) => {
            
            state.loading = true;
        })

        .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
            state.searchProducts = action.payload;
            
            state.loading = false;
        })

        .addCase(fetchAsyncSearchProduct.rejected, (state) => {
            
            state.loading = false;
        })
    }
})

export const fetchAsyncSearchProduct = createAsyncThunk('product-search/fetch', async(searchTerm) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
    const data = await response.json();
    return data.products;
});

export const { setSearchTerm } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;

export default searchSlice.reducer;