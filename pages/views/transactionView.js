import Nav from 'components/nav/nav';
import axios from 'axios';
import styles from 'styles/Home.module.css';

export default function TransactionView() {
  const apiCall = () => {
    axios
      .get('/')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.container}>
      <Nav />
      <button onClick={apiCall}>Click me</button>
      <ul>
        <li>List all transactions</li>
        <li>Calculate amount spent over the year</li>
        <li>Show specific total for that month</li>
      </ul>
    </div>
  );
}
