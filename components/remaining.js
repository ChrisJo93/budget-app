import React, { Component } from 'react';

class Remaining extends Component {
  //the monthly budget will be imported directly from server
  //therefore, the remaining budget can be calculated client side using inputed data.
  //Monthly budget file is no longer needed if this component can handle calculations AND displaying budget concerns.
  //maybe calculations would best be handled in the server?
  state = {};

  // handleState = (response) => {
  //   this.setState({ remainder: response });
  // };

  render() {
    return <div> Remaining budget for ${this.state.remainder}</div>;
  }
}

export default Remaining;