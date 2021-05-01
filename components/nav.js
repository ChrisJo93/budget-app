import Link from 'next/link';

const Nav = () => {
  return (
    <header>
      <div>
        <div>
          <h2>
            {' '}
            <a
              href="https://github.com/ChrisJo93"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Money
            </a>
          </h2>
        </div>

        <div>
          <Link href="/">
            <a>Overview</a>
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
