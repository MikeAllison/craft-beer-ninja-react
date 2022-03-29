import styles from './RecentSearchItem.module.css';

const RecentSearchItem = props => {
  const recentSearchHandler = e => {
    console.log('recentSearchHandler - Location: ' + props.location);
  };

  return (
    <li className={styles.li} onClick={recentSearchHandler}>
      <span>{props.location}</span>
      <span className={styles['places-count']}>{props.placesCount}</span>
    </li>
  );
};

export default RecentSearchItem;
