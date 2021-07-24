import styles from './Wallet.module.css';

const WalletList = (props) => {
  return (
    // <div className={styles.card_container}>

    //   <div className={styles.card}>
    //     <div className={styles.card_top_right}>
    //       <p>{props.amount}</p>
    //     </div>
    //     <div className={styles.card_bottom_left}>
    //       <h3>{props.name}</h3>
    //     </div>
    //   </div>
    // </div>
    <form className={styles.form_spacer}>
      <input type="radio" value={props.name} name="wallet" />
      <label className={styles.card_container}>{props.name}</label>
    </form>
  );
};

export default WalletList;
