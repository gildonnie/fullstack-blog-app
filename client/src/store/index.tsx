// import { configureStore } from '@reduxjs/toolkit';
// import catagoryReducer from './catagorySlice';
// export default configureStore({
//     reducer: {
//         catagory: catagoryReducer
//     },
// });

// import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import catagoryReducer from './catagorySlice';

export const store = configureStore({
  reducer: {
    catagory: catagoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;