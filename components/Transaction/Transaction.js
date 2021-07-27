import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Transaction.module.css';

import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import { transactionList } from 'redux/actions';

/* To Do:
1. Form for transaction entry
2. Import receipt scanner.
*/

const Transaction = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(transactionList()), [TransactionList]);

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
      <p>YoooooYoooooYoooooYoooooYoooooYoooooYooooo</p>
      {transactions}
      <TransactionForm />
    </div>
  );
};

export default connect((state) => state)(Transaction);
