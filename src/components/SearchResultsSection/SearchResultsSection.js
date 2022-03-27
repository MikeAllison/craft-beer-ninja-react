import ResultsList from './ResultsList';

import './SearchResultsSection.css';

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
      <ul className="search-results-menu">
        <li className="search-results-menu__selected">Results</li>
        <li>Recent Searches</li>
      </ul>
      <ResultsList results={places} />
    </div>
  );
};

export default SearchResultsSection;
