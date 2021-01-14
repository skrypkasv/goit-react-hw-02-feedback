import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className="statistics">
      <ul>
        <li>
          <span className={styles.good}>Good:</span> <span className={styles.digit}>{good}</span>
        </li>
        <li>
          <span className={styles.neutral}>Neutral:</span> <span className={styles.digit}>{neutral}</span>
        </li>
        <li>
          <span className={styles.bad}>Bad:</span> <span className={styles.digit}>{bad}</span>
        </li>
        <li>
          Total: <span className={styles.digit}>{total}</span>
        </li>
        <li>
          <span className={styles.positive}>Positive feedback:</span> <span className={styles.digit}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
