import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { resultsActions } from './store/results';

import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResultsSection from './components/SearchResultsSection/SearchResultsSection';

function App() {
  const dispatch = useDispatch();

  const [searchLocation, setSearchLocation] = useState('New York, NY');
  const [nextPageToken, setNextPageToken] = useState();

  async function textSearchHandler(searchLocationRef) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/form-search`,
      {
        method: 'POST',
        body: JSON.stringify({
          searchLocation: searchLocationRef.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(resultsActions.add(data));
      setSearchLocation(data.searchLocation.formattedAddress);
      setNextPageToken(data.nextPageToken);
      searchLocationRef.current.value = '';

      // TO-DO:
      // Get distances
      // Show search modal
      // Add location to recent searches
      // Handle 0 results
      // Handle errors
    }
  }

  async function geolocationSearchHandler(e) {
    if (!navigator.geolocation) {
      // TO-DO:
      // Show alert
      console.log('geolocation disabled in browser');
      return;
    }

    async function getCurPosSuccess(geoPosition) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URI}/geo-search`,
        {
          method: 'POST',
          body: JSON.stringify({
            coordinates: {
              lat: geoPosition.coords.latitude,
              lng: geoPosition.coords.longitude
            }
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(resultsActions.add(data));
        setSearchLocation(data.searchLocation.formattedAddress);
        setNextPageToken(data.nextPageToken);

        // TO-DO:
        // Get distances
        // Show search modal
        // Add location to recent searches
        // Handle 0 results
        // Handle errors
      }

      //
    }

    function getCurPosFail() {
      // TO-DO: Show error modal
      console.log('geo-fail');
    }

    await navigator.geolocation.getCurrentPosition(
      getCurPosSuccess,
      getCurPosFail
    );
  }

  return (
    <div className="app">
      <header className="brand">
        <img src="./img/ninja-white-trans.svg" alt="Ninja Icon" />
        <h2>Craft Beer Ninja</h2>
      </header>
      <SearchForm
        searchLocation={searchLocation}
        onTextSearch={textSearchHandler}
        onGeolocationSearch={geolocationSearchHandler}
      />
      <SearchResultsSection nextPageToken={nextPageToken} />
    </div>
  );
}

export default App;
