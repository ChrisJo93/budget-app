import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.nav_container}>
      <div>
        <h2>
          <a
            href="https://github.com/ChrisJo93"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logo/Icon
          </a>
        </h2>
      </div>

      <div className={styles.nav_links}>
        <Link href="/">
          <a className={styles.link}>Overview</a>
        </Link>
      </div>

      <div className={styles.nav_links}>
        <Link href="/">
          <a className={styles.link}>Space Holder</a>
        </Link>
      </div>

      <div className={styles.nav_links}>
        <Link href="/">
          <a className={styles.link}>Logout</a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
