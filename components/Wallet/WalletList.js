import styles from './Wallet.module.css';

const WalletList = (props) => {
  const background = {
    backgroundImage: `url(https://images.unsplash.com/photo-1589401840659-1d637c491487?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=672&q=80)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  props.name === 'Checking'
    ? (background.backgroundImage = `url(https://images.unsplash.com/photo-1560200955-338196b80f81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`)
    : (background.backgroundImage = `url(https://images.unsplash.com/photo-1589401840659-1d637c491487?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=672&q=80)`);

  return (
    <div className={styles.card} style={background}>
      <div className={styles.card_container}>
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
