import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className="flex flex-row flex-nowrap justify-between">
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
          <a>Overview</a>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <Link href="/">
          <a>Space Holder</a>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <Link href="/">
          <a>Logout</a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
