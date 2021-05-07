import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './Wallet.module.css';

import WalletList from './WalletList';
import { walletList } from 'redux/actions';

const Wallet = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(walletList()));

  const wallets = props.wallet.walletList.map((item, index) => {
    return (
      <WalletList key={index} name={item.wallet_name} amount={item.income} />
    );
  });
  return <div className={styles.wallet_container}>{wallets}</div>;
};

export default connect((state) => state)(Wallet);
