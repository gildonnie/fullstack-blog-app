import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3001';

export const getCatagory = createAsyncThunk(
    'catagory/getCatagory',
    async () => {
      const { data:response } = await axios.get(`${url}/catagory`);
      console.log('response:', response);
      return response;
    }
  );

export const catagorySlice = createSlice({
    name: 'catagory',
    initialState: {
      catagory: [],
    },
    reducers: {
        setCatagory(state, { payload }) {
          state.catagory = payload;
        },
      },
      extraReducers(builder) {
        builder
        .addCase(getCatagory.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.value = payload;
          })
        }
    });

    export const { setCatagory } = catagorySlice.actions;

export default catagorySlice.reducer;