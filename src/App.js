import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  static defaultProps = { initValue: 0 };
  static propTypes = {};

  state = {
    good: this.props.initValue,
    neutral: this.props.initValue,
    bad: this.props.initValue,
  };

  total = 0;

  percentage = 0;

  leaveFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.id]: prevState[e.target.id] + 1,
      };
    });
  };

  countTotalFeedback = currentState => {
    const sumOfFeedbacks = Object.values(currentState).reduce((acc, value) => acc + value, 0);
    this.total = sumOfFeedbacks;
    return this.total;
  };

  countPositiveFeedbackPercentage = currentState => {
    this.percentage = Math.round(Number(currentState.good / (this.total - currentState.neutral) || 0) * 100);
    return this.percentage;
  };

  render() {
    this.countTotalFeedback(this.state);
    this.countPositiveFeedbackPercentage(this.state);
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.total ? (
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.total} positivePercentage={this.percentage} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
