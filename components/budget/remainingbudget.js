import React, { Component } from 'react';

class RemainingBudget extends Component {
  state = {
    currentBudget: 0,
  };

  render() {
    return <div>Left to Spend: ${this.state.currentBudget}</div>;
  }
}

export default RemainingBudget;
