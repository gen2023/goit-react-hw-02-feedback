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
  static defaultProps = {};

  static propTypes = {};

  state = {
    ...INITIAL_STATE,
  };

  buttonType = type => {
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

    const total = this.countTotalFeedback();
    const countPositive = this.countPositiveFeedbackPercentage(total, good);

    return (
      <Fragment>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.buttonType}
          />
        </Section>
        <Section title="Pleace leave feedback"></Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={countPositive}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}
