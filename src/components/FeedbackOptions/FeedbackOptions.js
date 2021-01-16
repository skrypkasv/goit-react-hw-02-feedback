import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysFromState = Object.keys(options);

  const capitalize = s => {
    return s[0].toUpperCase() + s.slice(1);
  };

  return (
    <div className="feedback">
      {keysFromState.map(key => {
        const text = capitalize(key);
        return (
          <button type="button" id={key} className={styles[key]} onClick={onLeaveFeedback} key={key}>
            {text}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
