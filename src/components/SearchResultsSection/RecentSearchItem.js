import styles from './RecentSearchItem.module.css';

const RecentSearchItem = props => {
  return (
    <li className={styles.li}>
      <span>{props.recentSearch.location}</span>
      <span className={styles['places-count']}>
        {props.recentSearch.placesCount}
      </span>
    </li>
  );
};

export default RecentSearchItem;
