import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { fetchProductsService } from '../../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsService();
    return response;
  }
);

interface ProductsState {
  items: Product[];
  favorites: number[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  favorites: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      state.favorites.includes(productId)
        ? (state.favorites = state.favorites.filter((id) => id !== productId))
        : state.favorites.push(productId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;
