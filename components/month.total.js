import styles from 'styles/Home.module.css';

const MonthDisplay = (props) => {
  return (
    <button onClick={() => console.log(props)} className={styles.month_button}>
      I should bring back months
    </button>
  );
};

export default MonthDisplay;
