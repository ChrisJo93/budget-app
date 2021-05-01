import Link from 'next/link';

const Nav = () => {
  return (
    <header className="bg-green-500 flex flex-row flex-nowrap justify-between">
      <div className="bg-blue-500 flex-none">
        <h2>
          {' '}
          <a
            href="https://github.com/ChrisJo93"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logo/Icon
          </a>
        </h2>
      </div>

      <div className="bg-red-500 flex-1 text-center">
        <Link href="/">
          <a className="DELETE ME bg-purple-500">Overview</a>
        </Link>
      </div>
      <div className="bg-blue-500 flex-1 text-center">
        <Link href="/">
          <a className=" DELETE ME bg-green-500">Space Holder</a>
        </Link>
      </div>
      <div className="bg-purple-500 flex-1 text-center">
        <Link href="/">
          <a className="DELETE ME bg-yellow-500">Logout</a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
