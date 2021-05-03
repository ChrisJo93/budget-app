import { walletList } from './redux/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test2 extends Component {
  componentDidMount() {
    this.props.dispatch(walletList());
  }

  render() {
    return <button>Testing redux actions</button>;
  }
}

export default connect((state) => state)(Test2);
