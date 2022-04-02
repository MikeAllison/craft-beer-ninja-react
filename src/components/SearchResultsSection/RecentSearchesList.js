import RecentSearchItem from './RecentSearchItem';
import styles from './RecentSearchesList.module.css';

const RecentSearchesList = props => {
  if (props.recentSearches.length === 0) {
    return (
      <h3 className={styles.heading}>Search to Add a Location to This List</h3>
    );
  }

  return (
    <>
      <ul className={styles.ul}>
        {props.recentSearches.map(recentSearch => {
          return (
            <RecentSearchItem
              key={recentSearch.id}
              location={recentSearch.location}
              placesCount={recentSearch.placesCount}
            />
          );
        })}
      </ul>
    </>
  );
};

export default RecentSearchesList;
