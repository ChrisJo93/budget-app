import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Nav = () => {
  return (
    <header className={styles.navHeader}>
      <div className={styles.navContainer}>
        <div className={styles.navTitle}>
          <h2>Budgetier</h2>
        </div>

        <div className={styles.navLinks}>
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
        </div>
      </div>
    </header>
  );
};

export default Nav;
