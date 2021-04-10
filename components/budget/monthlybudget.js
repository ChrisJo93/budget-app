import React, { Component } from 'react';

class MonthlyBudget extends Component {
  // monthly budget will be imported from database directly.
  state = {
    monthly: 300,
  };

  render() {
    return <div>Total Budget for (month): ${this.state.monthly}</div>;
  }
}

export default MonthlyBudget;
