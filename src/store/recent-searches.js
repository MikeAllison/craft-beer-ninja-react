import { createSlice } from '@reduxjs/toolkit';

const initialRecentSearchesState = {
  recentSearches: JSON.parse(localStorage.getItem('recentSearches'))
};

const recentSearchesSlice = createSlice({
  name: 'recentSearches',
  initialState: initialRecentSearchesState,
  reducers: {
    add(state, actions) {}
  }
});

export const recentSearcesActions = recentSearchesSlice.actions;

export default recentSearchesSlice.reducer;
