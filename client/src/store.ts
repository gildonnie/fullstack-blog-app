import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { postsApi } from './services/api';

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => { 
    return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(postsApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
