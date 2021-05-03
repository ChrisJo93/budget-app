import styles from './Wallet.module.css';

const WalletList = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_container}>
        <p>{props.amount}</p>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default WalletList;
