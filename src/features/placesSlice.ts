// src/features/placesSlice.ts

import { Place } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlacesState {
  places: Place[];
  loading: boolean;
}


const initialState: PlacesState = {
  places: [],
  loading: false,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces(state, action: PayloadAction<Place[]>) {
      console.log('action',action.payload)
      state.places = action.payload;
    },
    toggleVisited(state, action: PayloadAction<string>) {
      const place = state.places.find((p) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
    visitedPlaceList(state) {
      state.places = state.places.filter((place) => place.visited);
    },
    unVisitedPlaceList(state) {
      state.places = state.places.filter((place) => !place.visited);
    },
  },
});

export const {
  setPlaces,
  toggleVisited,
  unVisitedPlaceList,
  visitedPlaceList,
} = placesSlice.actions;
export default placesSlice.reducer;
