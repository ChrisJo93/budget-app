import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Nav = () => {
  return (
    <header className={styles.navHeader}>
      <div className={styles.navContainer}>
        <div className={styles.navTitle}>
          <h2>
            {' '}
            <a
              href="https://github.com/ChrisJo93"
              target="_blank"
              rel="noopener noreferrer"
            >
              Budgetier
            </a>
          </h2>
        </div>

        <div className={styles.navLinks}>
          <Link href="/">
            <a>Overview</a>
          </Link>
          <Link href="/views/budget_view">
            <a>Goals</a>
          </Link>
          <Link href="/views/expense_view">
            <a>Transactions</a>
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
