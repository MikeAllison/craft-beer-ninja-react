import ResultsList from './ResultsList';

import styles from './SearchResultsSection.module.css';

const SearchResultsSection = () => {
  const places = [
    {
      id: 1,
      name: 'Sweet Ave'
    },
    {
      id: 2,
      name: 'Solid State'
    }
  ];

  return (
    <div>
      <ul className={styles['search-results-menu']}>
        <li className={styles.selected}>Results</li>
        <li>Recent Searches</li>
      </ul>
      <ResultsList results={places} />
    </div>
  );
};

export default SearchResultsSection;
