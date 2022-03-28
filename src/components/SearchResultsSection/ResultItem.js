import styles from './ResultItem.module.css';

const ResultItem = props => {
  return (
    <li className={styles.li}>
      <span>{props.result.name}</span>
      <span className={styles.distance}>
        <div className={styles.spinner}>
          <div className={styles.bounce1}></div>
          <div className={styles.bounce2}></div>
          <div className={styles.bounce3}></div>
        </div>
        {/* <div>Distance</div> */}
      </span>
    </li>
  );
};

export default ResultItem;
