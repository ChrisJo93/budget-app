import React, { Component } from 'react';

class RemainingBudget extends Component {
  //the monthly budget will be imported directly from server
  //therefore, the remaining budget can be calculated client side using inputed data.
  //Monthly budget file is no longer needed if this component can handle calculations AND displaying budget concerns.
  //maybe calculations would best be handled in the server?
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
