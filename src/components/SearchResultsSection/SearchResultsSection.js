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

  return (
    <div>
      <ul className={styles['search-results-menu']}>
        <li className={styles.selected}>Results</li>
        <li>Recent Searches</li>
      </ul>
      <ResultsList results={results} />
      <RecentSearchesList recentSearches={recentSearches} />
    </div>
  );
};

export default SearchResultsSection;
