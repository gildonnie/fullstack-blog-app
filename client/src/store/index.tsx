// import { configureStore } from '@reduxjs/toolkit';
// import categoryReducer from './categorySlice';
// export default configureStore({
//     reducer: {
//         category: categoryReducer
//     },
// });

// import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
