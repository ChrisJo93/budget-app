import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Transaction.module.css';

import TransactionList from './TransactionList';
import { transactionList } from 'redux/actions';

const Transaction = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(transactionList()));

  const transactions = props.transaction.transactionList.map((item, index) => {
    return (
      <TransactionList
        key={index}
        name={item.item_name}
        amount={item.amount}
        category={item.category_name}
      />
    );
  });

  return (
    <div className={styles.transaction_container}>
      <h4>Transactions</h4>
      {transactions}
    </div>
  );
};

export default connect((state) => state)(Transaction);
