import React, { Component } from 'react';
import axios from 'axios';

class RemainingBudget extends Component {
  //the monthly budget will be imported directly from server
  //therefore, the remaining budget can be calculated client side using inputed data.
  //Monthly budget file is no longer needed if this component can handle calculations AND displaying budget concerns.
  //maybe calculations would best be handled in the server?
  // componentDidMount() {
  //   axios
  //     .get('/total')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  state = {
    remainder: 0,
  };

  render() {
    return <div>Left to Spend: ${this.state.remainder}</div>;
  }
}

export default RemainingBudget;
