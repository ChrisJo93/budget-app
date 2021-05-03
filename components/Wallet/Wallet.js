import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Wallet.module.css';

import { walletList } from 'redux/actions';
import WalletList from './WalletList';

class Wallet extends Component {
  componentDidMount() {
    this.props.dispatch(walletList());
  }

  render() {
    const wallets = this.props.wallet.walletList.map((wallet, index) => {
      return (
        <WalletList
          key={index}
          name={wallet.wallet_name}
          amount={wallet.income}
        />
      );
    });
    return <div className={styles.wallet_container}>{wallets}</div>;
  }
}

export default connect((state) => state)(Wallet);
