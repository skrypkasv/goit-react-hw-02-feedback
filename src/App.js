import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  static defaultProps = { initValue: 0 };

  state = {
    good: this.props.initValue,
    neutral: this.props.initValue,
    bad: this.props.initValue,
  };

  leaveFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.id]: prevState[e.target.id] + 1,
      };
    });
  };

  countTotalFeedback = currentState => {
    const sumOfValues = Object.values(currentState).reduce((acc, value) => acc + value, 0);
    return sumOfValues;
  };

  countPositiveFeedbackPercentage = (currentState, sumOfAll) => {
    const percentOfGoodValue = Math.round(Number(currentState.good / (sumOfAll - currentState.neutral) || 0) * 100);
    return percentOfGoodValue;
  };

  render() {
    const total = this.countTotalFeedback(this.state);
    const percentage = this.countPositiveFeedbackPercentage(this.state, total);

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={percentage} /> : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}
