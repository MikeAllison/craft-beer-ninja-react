import ResultItem from './ResultItem';
import styles from './ResultsList.module.css';

const ReultsList = props => {
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
          return <ResultItem result={result} />;
        })}
      </ul>
      <button className={styles.button}>Load More Places</button>
    </div>
  );
};

export default ReultsList;
