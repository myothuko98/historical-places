// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './features/placesSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;