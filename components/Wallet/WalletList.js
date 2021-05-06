import styles from './Wallet.module.css';

const WalletList = (props) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card} onMouseEnter={() => console.log(props.name)}>
        <div className={styles.card_top_right}>
          <p>{props.amount}</p>
        </div>
        <div className={styles.card_bottom_left}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default WalletList;
