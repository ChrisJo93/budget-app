import styles from './Wallet.module.css';

const Accounts = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_container}>
        <h2>{props.name}</h2>
        <p>{props.amount}</p>
      </div>
    </div>
  );
};

export default Accounts;
