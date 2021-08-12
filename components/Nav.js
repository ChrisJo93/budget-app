import Link from 'next/link';

/* To Do:
1. Spike how to handle displays. Are different pages necessary or should different components be rendered at need
*/

const Nav = (props) => {
  // taking in props for user image in top right corner
  //later change

  return (
    <header className="bg-red-700">
      <ul>
        <div>
          <li>
            <Link href="/" scroll={false}>
              <a>Overview</a>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/" scroll={false}>
              <a>Space Holder</a>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/" scroll={false}>
              <a>Logout</a>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://github.com/ChrisJo93"
              target="_blank"
              rel="noopener noreferrer"
            >
              Logo/Icon
            </a>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Nav;
