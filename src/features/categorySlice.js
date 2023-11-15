import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    categories: [],
    categoryProducts: [],
    loading: false,
        error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncCategories.pending, (state) => {
            state.loading = true;
        })

        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            
        })

        .addCase(fetchAsyncCategories.rejected, (state) => {
            state.loading = false;
        })

        .addCase(fetchAsyncProductsOfCategory.pending, (state) => {
            state.loading = true;
        })

        .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
            state.categoryProducts = action.payload;
            
        })

        .addCase(fetchAsyncProductsOfCategory.rejected, (state, action) => {
            state.loading = false;
        })
    }
});

export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async() => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
});

export const fetchAsyncProductsOfCategory = createAsyncThunk('category-products/fetch', async(category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data.products; 
});

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) => state.category.categoryProducts;
export default categorySlice.reducer;