import { useSelector } from 'react-redux';

import ResultItem from './ResultItem';
import styles from './ResultsList.module.css';

const ResultsList = () => {
  const places = useSelector(state => state.results.places);
  const nextPageToken = useSelector(state => state.results.nextPageToken);

  const loadMoreResultsHandler = () => {
    console.log('loadMoreResultssHandler - Next Page Token:' + nextPageToken);
  };

  if (places.length === 0) {
    return (
      <img
        src="./img/beer-hefe.svg"
        alt="Beer Glass Icon"
        className={styles.img}
      />
    );
  }

  return (
    <>
      <ul className={styles.ul}>
        {places.map(place => {
          return (
            <ResultItem
              key={place.place_id}
              placeID={place.place_id}
              name={place.name}
              distance={place.distance}
            />
          );
        })}
      </ul>
      {nextPageToken && (
        <button className={styles.button} onClick={loadMoreResultsHandler}>
          Load More Results
        </button>
      )}
    </>
  );
};

export default ResultsList;
