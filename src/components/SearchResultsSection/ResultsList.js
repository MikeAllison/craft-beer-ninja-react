import ResultItem from './ResultItem';
import styles from './ResultsList.module.css';

const ResultsList = props => {
  const loadMorePlacesHandler = () => {
    console.log(
      'loadMorePlacesHandler - Next Page Token:' + props.nextPageToken
    );
  };

  if (props.results.length === 0) {
    return (
      <img
        src="./img/beer-hefe.svg"
        alt="Beer Glass Icon"
        className={styles.img}
      />
    );
  }

  return (
    <div>
      <ul className={styles.ul}>
        {props.results.map(result => {
          return (
            <ResultItem
              key={result.placeID}
              placeID={result.placeID}
              name={result.name}
              distance={result.distance}
            />
          );
        })}
      </ul>
      {props.nextPageToken && (
        <button className={styles.button} onClick={loadMorePlacesHandler}>
          Load More Places
        </button>
      )}
    </div>
  );
};

export default ResultsList;
