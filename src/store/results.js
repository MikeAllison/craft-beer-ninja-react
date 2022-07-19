import { createSlice } from '@reduxjs/toolkit';

const initialResultsState = { places: [], nextPageToken: null };

const resultsSlice = createSlice({
  name: 'results',
  initialState: initialResultsState,
  reducers: {
    add(state, action) {
      console.log(action.payload);
      state.places = action.payload.places;
      state.nextPageToken = action.payload.nextPageToken;
    }
  }
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice.reducer;
