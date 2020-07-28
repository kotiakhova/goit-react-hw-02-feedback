import React, { Component } from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Notification from './Notification/Notification'



export default class FeedbackForm extends Component {
    static defaultProps = {};
  
    static propTypes = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0
      }

      handleClick = (e) => {
          const { name } = e.target

        this.setState(prevState => {
            return {
                [name]: prevState[name] +1
            }
        }

            );
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage()
      };
      countTotalFeedback() {
        this.setState(prevState => {
          return {
              total: prevState.good + prevState.neutral + prevState.bad
          }
      }
          );
      }
      countPositiveFeedbackPercentage() {
        this.setState(prevState => {
          return {
              positiveFeedback: Math.round (prevState.good / prevState.total * 100)
          }
      }
          );
      }
    render() {
      return (
        <>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions 
            // options={} 
            onLeaveFeedback={this.handleClick}>
        </FeedbackOptions>

        <Section title="Statistics">
            
        </Section>
        {this.state.total > 0 ? (
                  <Statistics 
                  good={this.state.good} 
                  neutral={this.state.neutral} 
                  bad={this.state.bad} 
                  total={this.state.total} 
                  positivePercentage={this.state.positiveFeedback} 
                  />
        ) : <Notification />}
        </>); 
    }
  }