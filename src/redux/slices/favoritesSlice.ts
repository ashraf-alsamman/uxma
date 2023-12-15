import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  items: number[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (!Array.isArray(state.items)) {
        console.error(
          'Expected state.items to be an array, but received:',
          state.items
        );
        state.items = [];
      }

      const index = state.items.indexOf(productId);

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(productId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
