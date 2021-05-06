import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './Wallet.module.css';

import WalletList from './WalletList';
import { walletList } from 'redux/actions';

const Wallet = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(walletList()));

  const wallets = props.wallet.walletList.map((wallet, index) => {
    return (
      <WalletList
        key={index}
        name={wallet.wallet_name}
        amount={wallet.income}
      />
    );
  });
  return <div className={styles.wallet_container}>{wallets}</div>;
};

export default connect((state) => state)(Wallet);
