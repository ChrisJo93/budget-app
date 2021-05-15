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
      <ul>
        <li>
          <Link href="/">
            <a>Overview</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Space Holder</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
