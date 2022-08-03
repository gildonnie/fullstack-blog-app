
// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const url = 'http://localhost:3000/posts';

// export const getCatagory = createAsyncThunk(
//     'catagory/getCatagory',
//     async () => {
//       const { data:response } = await axios.get(`${url}/catagory`);
//       console.log('response:', response);
//       return response;
//     }
//   );

// export const catagorySlice = createSlice({
//     name: 'catagory',
//     initialState: {
//       catagory: [],
//     },
//     reducers: {
//         setCatagory(state, { payload }) {
//           state.catagory = payload;
//         },
//       },
//       extraReducers(builder) {
//         builder
//         .addCase(getCatagory.fulfilled, (state, { payload }) => {
//             state.value = payload;
//           })
//         }
//     });
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/index.jsx';

type ExampleTypes = {
  category: string;
};

const initialState = {
  category: '',
} as ExampleTypes;

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      // const category = payload;
      // return category;
      state.category = action.payload;
    },
  },
});

export const { changeName, setCategory } = exampleSlice.actions;

export const getCategory = (state: RootState) => state;

export default exampleSlice.reducer;