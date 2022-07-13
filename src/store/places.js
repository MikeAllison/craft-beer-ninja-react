import { createSlice } from '@reduxjs/toolkit';

const initialPlacesState = { places: [] };

const placesSlice = createSlice({
  name: 'places',
  initialState: initialPlacesState,
  reducers: {
    add(state, action) {
      state.places = action.payload;
    }
  }
});

export const placesActions = placesSlice.actions;

export default placesSlice.reducer;
