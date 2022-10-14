import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleIncrement = e => {
    const targetName = e.target.name;
    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, neutral, bad }) => ({
      positivePercentage: Math.round((good / (good + neutral + bad)) * 100),
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave fedback</h1>
        <button type="button" name="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive Feedback: {this.state.positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}
