import React from 'react';
// import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className="feedback">
      <button type="button" id="good" onClick={onLeaveFeedback}>
        God
      </button>
      <button type="button" id="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" id="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}
