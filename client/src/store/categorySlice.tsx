import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from './index';
import type { RootState } from './index';

type categoryTypes = {
  Category: string;
};

const initialState = {
  Category: '',
} as categoryTypes;

export const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    getCategory: (state) => state,

    setCategory: (state, action: PayloadAction<string>) => {
      state.Category = action.payload;
    },
  },
});

export const { getCategory, setCategory } = categorySlice.actions;

// export const getCategory = (state: RootState) => state;

export default categorySlice.reducer;
