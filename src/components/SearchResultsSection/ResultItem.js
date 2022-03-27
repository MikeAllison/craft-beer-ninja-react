import './ResultItem.css';

const ResultItem = props => {
  return (
    <li>
      <span>{props.result.name}</span>
      <span className="distance">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        {/* <div>Distance</div> */}
      </span>
    </li>
  );
};

export default ResultItem;
