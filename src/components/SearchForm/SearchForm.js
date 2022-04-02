import { useState } from 'react';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  const defaultSearchLocation = 'New York, NY';
  const [searchLocation, setSearchLocation] = useState(defaultSearchLocation);

  const searchLocationChangeHander = event => {
    setSearchLocation(event.target.value);
  };

  const textSearchHandler = e => {
    e.preventDefault();
    console.log('textSearchHandler');
  };

  const geolocationSearchHandler = e => {
    e.preventDefault();
    console.log('geolocationSearchHandler');
    if (!navigator.geolocation) {
      console.log('geolocation disabled in browser');
    }
  };

  return (
    <>
      <h3 className={styles.heading}>Enter a Location</h3>
      <form>
        <input
          id="search-location"
          name="search-location"
          type="text"
          placeholder={
            searchLocation.length === 0 ? defaultSearchLocation : searchLocation
          }
          className={styles.input}
          onChange={searchLocationChangeHander}
        />
        <button className={styles.button} onClick={textSearchHandler}>
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
