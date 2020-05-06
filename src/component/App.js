import React, { Component, Fragment } from 'react';
import Statistic from './Statistic';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import '../css/style.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleClick = type => {
    this.setState(state => {
      return { [type]: state[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = (total, good) =>
    Math.ceil((good * 100) / total) ? Math.ceil((good * 100) / total) : 0;

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const total = this.countTotalFeedback();
    const countPositive = this.countPositiveFeedbackPercentage(total, good);
    const options = Object.keys(this.state);

    return (
      <Fragment>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositive}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}
