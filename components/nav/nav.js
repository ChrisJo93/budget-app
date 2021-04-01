import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h2 className={styles.navTitle}>Budgetier</h2>
      <Link href="/">
        <a>Overview</a>
      </Link>
      <Link href="/posts/transactions">
        <a>Transactions</a>
      </Link>
      <Link href="/budget">
        <a>Budget</a>
      </Link>
    </div>
  );
};

export default Nav;
