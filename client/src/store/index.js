import { configureStore } from '@reduxjs/toolkit';
import catagoryReducer from './catagorySlice';
export default configureStore({
    reducer: {
        catagory: catagoryReducer
    },
});