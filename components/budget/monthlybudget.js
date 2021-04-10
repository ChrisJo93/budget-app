import React, { Component } from 'react';

class MonthlyBudget extends Component {
  state = {
    monthlybudget: 300,
  };

  render() {
    return <div>Total Budget for (month): ${this.state.monthlybudget}</div>;
  }
}

export default MonthlyBudget;
