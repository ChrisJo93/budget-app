import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <header>
        <h2>Budgetier</h2>
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
