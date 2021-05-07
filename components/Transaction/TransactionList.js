import styles from './Transaction.module.css';

const TransactionList = (props) => {
  return (
    <div className={styles.transactions}>
      <div className={styles.transaction_name}>{props.name}</div>
      <div className={styles.transaction_name}>{props.category}</div>
      <div className={styles.transaction_amount}>{props.amount}</div>
    </div>
  );
};

export default TransactionList;
