import RecentSearchItem from './RecentSearchItem';
import styles from './RecentSearchesList.module.css';

const RecentSearchesList = props => {
  if (props.recentSearches.length === 0) {
    return (
      <h3 className={styles.heading}>Search to Add a Location to This List</h3>
    );
  }

  return (
    <div>
      <ul className={styles.ul}>
        {props.recentSearches.map(recentSearch => {
          return (
            <RecentSearchItem
              recentSearch={recentSearch}
              key={recentSearch.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecentSearchesList;
