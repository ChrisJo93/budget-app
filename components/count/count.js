import React, { Component } from 'react';

class Count extends Component {
  state = {
    currentBudget: 0,
  };
  render() {
    return <>{this.state.currentBudget}</>;
  }
}

export default Count;
