import React, { Component } from 'react';
import axios from 'axios';

class RemainingBudget extends Component {
  //the monthly budget will be imported directly from server
  //therefore, the remaining budget can be calculated client side using inputed data.
  //Monthly budget file is no longer needed if this component can handle calculations AND displaying budget concerns.
  //maybe calculations would best be handled in the server?
  state = {};

  componentDidMount() {
    axios
      .get('/total')
      .then((response) => {
        console.log(response.data);
        this.handleState(response.data[0].total_amount);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleState = (x) => {
    this.setState({ remainder: x });
  };

  render() {
    return <div>Left to Spend: ${this.state.remainder}</div>;
  }
}

export default RemainingBudget;
