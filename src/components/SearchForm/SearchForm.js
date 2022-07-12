import { useState, useRef } from 'react';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  const searchLocationRef = useRef();
  const [searchLocation, setSearchLocation] = useState('New York, NY');
  const [formIsValid, setFormIsValid] = useState(false);

  async function textSearchHandler(e) {
    e.preventDefault();
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
      console.log(response);
      const data = await response.json();
      console.log(data);
      setSearchLocation(data.searchLocation.formattedAddress);
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
    e.preventDefault();
    if (!navigator.geolocation) {
      console.log('geolocation disabled in browser');
      // TO-DO:
      // Show alert
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
        console.log(response);
        const data = await response.json();
        console.log(data);
        setSearchLocation(data.searchLocation.formattedAddress);
        searchLocationRef.current.value = '';

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
    <>
      <h3 className={styles.heading}>Enter a Location</h3>
      <form>
        <input
          ref={searchLocationRef}
          id="search-location"
          name="search-location"
          type="text"
          placeholder={searchLocation}
          className={styles.input}
          onChange={e => setFormIsValid(e.target.value.trim().length > 0)}
        />
        <button
          className={styles.button}
          onClick={textSearchHandler}
          disabled={!formIsValid}
        >
          <img src="./img/geolocation.svg" alt="Globe Icon" />
          Locate!
        </button>
      </form>
      <h4>- or -</h4>
      <form>
        <button
          className={`${styles.button} ${styles['geo-locate-btn']}`}
          onClick={geolocationSearchHandler}
        >
          <img src="./img/compass.svg" alt="Compass Icon" />
          Use My Location
        </button>
      </form>
    </>
  );
};

export default SearchForm;
