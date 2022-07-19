import { useState, useEffect } from 'react';

import RecentSearchItem from './RecentSearchItem';
import styles from './RecentSearchesList.module.css';

const RecentSearchesList = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('recentSearches'))) {
      setRecentSearches(JSON.parse(localStorage.getItem('recentSearches')));
    }
  }, []);

  if (recentSearches.length === 0) {
    return (
      <h3 className={styles.heading}>Search to Add a Location to This List</h3>
    );
  }

  return (
    <>
      <ul className={styles.ul}>
        {recentSearches.map(recentSearch => {
          return (
            <RecentSearchItem
              key={recentSearch.id}
              location={recentSearch.savedSearchLocation}
              placesCount={recentSearch.placesCount}
            />
          );
        })}
      </ul>
    </>
  );
};

export default RecentSearchesList;
