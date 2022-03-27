import ResultItem from './ResultItem';
import './ResultsList.css';

const ReultsList = props => {
  if (props.results.length === 0) {
    return <img src="./img/beer-hefe.svg" alt="Beer Glass Icon" />;
  }

  return (
    <div>
      <ul>
        {props.results.map(result => {
          return <ResultItem result={result} />;
        })}
      </ul>
      <button>Load More Places</button>
    </div>
  );
};

export default ReultsList;
