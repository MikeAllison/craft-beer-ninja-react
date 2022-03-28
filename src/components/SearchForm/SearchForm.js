import styles from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <div>
      <h3 className={styles.heading}>Enter a Location</h3>
      <form>
        <input
          id="search-location"
          name="search-location"
          type="text"
          placeholder="lastSearchLocation.formattedAddress"
          className={styles.input}
        />
        <button className={styles.button}>
          <img src="./img/geolocation.svg" alt="Globe Icon" />
          Locate!
        </button>
      </form>
      <h4>- or -</h4>
      <form>
        <button className={`${styles.button} ${styles['geo-locate-btn']}`}>
          <img src="./img/compass.svg" alt="Compass Icon" />
          Use My Location
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
