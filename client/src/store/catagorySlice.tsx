
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

type catagoryTypes = {
  Catagory: string;
};

const initialState = {
  Catagory: '',
} as catagoryTypes;

export const catagorySlice = createSlice({
  name: 'Catagory',
  initialState,
  reducers: {
    Catagory: (state) => {
      return state;
    },
    
    setCatagory: (state, action: PayloadAction<string>) => {
      state.Catagory = action.payload;
    },
  },
});

export const { Catagory, setCatagory } = catagorySlice.actions;

export const getCatagory = (state: RootState) => state;

export default catagorySlice.reducer;