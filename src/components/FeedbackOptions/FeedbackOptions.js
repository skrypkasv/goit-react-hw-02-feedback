import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysFromState = Object.keys(options);
  return (
    <div className="feedback">
      <button type="button" id={keysFromState[0]} className={styles.good} onClick={onLeaveFeedback}>
        God
      </button>
      <button type="button" id={keysFromState[1]} className={styles.neutral} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" id={keysFromState[2]} className={styles.bad} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
