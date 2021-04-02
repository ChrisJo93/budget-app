import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <header className={styles.header}>
        <h2 className={styles.navTitle}>Budgetier</h2>
        <Link href="/">
          <a>Overview</a>
        </Link>
        <Link href="/views/transactionView">
          <a>Transactions</a>
        </Link>
        <Link href="/views/budgetView">
          <a>Budget</a>
        </Link>
        <Link href="/">
          <a>Logout</a>
        </Link>
      </header>
    </div>
  );
};

export default Nav;
