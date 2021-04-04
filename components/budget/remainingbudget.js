import React, { Component } from 'react';

class RemainingBudget extends Component {
  state = {
    currentBudget: 0,
  };

  add = (e, item) => {
    this.state.currentBudget += item;
  };

  subtract = (e, item) => {
    this.state.currentBudget -= item;
  };

  render() {
    return <div>Left to Spend: ${this.state.currentBudget}</div>;
  }
}

export default RemainingBudget;
