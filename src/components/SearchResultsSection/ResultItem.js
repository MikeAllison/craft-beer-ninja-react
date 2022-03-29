import styles from './ResultItem.module.css';

const ResultItem = props => {
  const placeDetailsHandler = e => {
    console.log('placeDetailsHandler - PlaceID: ' + props.placeID);
  };

  return (
    <li className={styles.li} onClick={placeDetailsHandler}>
      <span>{props.name}</span>
      {props.distance ? (
        <div className={styles.distance}>{props.distance}</div>
      ) : (
        <span className={styles.distance}>
          <div className={styles.spinner}>
            <div className={styles.bounce1}></div>
            <div className={styles.bounce2}></div>
            <div className={styles.bounce3}></div>
          </div>
        </span>
      )}
    </li>
  );
};

export default ResultItem;
