import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';

export default function TransactionView() {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <ul>
          <li>List all transactions</li>
          <li>Calculate amount spent over the year</li>
          <li>Show specific total for that month</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
