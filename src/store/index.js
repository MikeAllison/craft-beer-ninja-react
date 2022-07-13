import { configureStore } from '@reduxjs/toolkit';

import placesReducer from './places';
import recentSearchesReducer from './recent-searches';

const store = configureStore({
  places: placesReducer,
  recentSearches: recentSearchesReducer
});

export default store;
