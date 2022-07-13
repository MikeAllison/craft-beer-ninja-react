import { createSlice } from '@reduxjs/toolkit';

const initialRecentSearchesState = {
  recentSearches: JSON.parse(localStorage.getItem('recentSearches'))
};

const recentSearchesSlice = createSlice({
  name: 'recentSearches',
  initialState: initialRecentSearchesState,
  reducers: {
    save(state, actions) {
      const recentSearches = JSON.parse(
        localStorage.getItem('recentSearches') || []
      );
      recentSearches.unshift({
        savedSearchLocation: actions.payload.formattedAddress,
        placesCount: actions.payload.placesCount
      });
      if (recentSearches.length > 10) {
        recentSearches.pop();
      }
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      state.recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
    }
  }
});

export const recentSearcesActions = recentSearchesSlice.actions;

export default recentSearchesSlice.reducer;
