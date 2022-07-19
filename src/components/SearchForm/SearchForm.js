import { useState, useRef } from 'react';

import styles from './SearchForm.module.css';

const SearchForm = props => {
  const searchLocationRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);

  const textSearchHandler = e => {
    e.preventDefault();
    setFormIsValid(false);
    props.onTextSearch(searchLocationRef);
  };

  const geolocationSearchHandler = e => {
    e.preventDefault();
    props.onGeolocationSearch();
  };

  return (
    <>
      <h3 className={styles.heading}>Enter a Location</h3>
      <form>
        <input
          ref={searchLocationRef}
          id="search-location"
          name="search-location"
          type="text"
          placeholder={props.searchLocation}
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
