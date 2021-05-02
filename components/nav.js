import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header
      className={[
        [`flex flex-row flex-nowrap justify-between`],
        styles.nav_container,
      ].join(' ')}
    >
      <div className=" flex-none">
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

      <div className="flex-1 text-center">
        <Link href="/">
          <a className={styles.link}>Overview</a>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <Link href="/">
          <a className={styles.link}>Space Holder</a>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <Link href="/">
          <a className={styles.link}>Logout</a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
