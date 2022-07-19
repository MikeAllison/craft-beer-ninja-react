import { useState } from 'react';

import ResultsList from './ResultsList';
import RecentSearchesList from './RecentSearchesList';

import styles from './SearchResultsSection.module.css';

const SearchResultsSection = () => {
  const [selectedTab, setSelectedTab] = useState('Results');

  const selectedTabChangeHandler = selectedTab => {
    setSelectedTab(selectedTab);
  };

  return (
    <>
      <ul className={styles['search-results-menu']}>
        <li
          className={selectedTab === 'Results' ? styles.selected : null}
          onClick={selectedTabChangeHandler.bind(this, 'Results')}
        >
          Results
        </li>
        <li
          className={selectedTab === 'RecentSearches' ? styles.selected : null}
          onClick={selectedTabChangeHandler.bind(this, 'RecentSearches')}
        >
          Recent Searches
        </li>
      </ul>
      {selectedTab === 'Results' && <ResultsList />}
      {selectedTab === 'RecentSearches' && <RecentSearchesList />}
    </>
  );
};

export default SearchResultsSection;
