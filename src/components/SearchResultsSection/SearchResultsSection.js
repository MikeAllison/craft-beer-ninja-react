import { useState } from 'react';

import ResultsList from './ResultsList';
import RecentSearchesList from './RecentSearchesList';

import styles from './SearchResultsSection.module.css';

const SearchResultsSection = () => {
  const results = [
    {
      id: 1,
      name: 'Sweet Ave'
    },
    {
      id: 2,
      name: 'Solid State'
    }
  ];

  const recentSearches = [
    {
      id: 1,
      location: 'Woodside, NY',
      placesCount: 2
    },
    {
      id: 2,
      location: 'Walnut Creek, CA',
      placesCount: 15
    }
  ];

  const [selectedTab, setSelectedTab] = useState('Results');

  const selectedTabChangeHandler = selectedTab => {
    setSelectedTab(selectedTab);
  };

  return (
    <div>
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
      {selectedTab === 'Results' && <ResultsList results={results} />}
      {selectedTab === 'RecentSearches' && (
        <RecentSearchesList recentSearches={recentSearches} />
      )}
    </div>
  );
};

export default SearchResultsSection;
