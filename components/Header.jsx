import Link from 'next/link';

import HeaderMenu from './common/HeaderMenu';

const Header = () => (
  <header className="p-5 md:p-10 lg:px-28 lg:py-10 flex flex-row-reverse">
    <div className="flex items-center">
      <Link href="/">
        <a className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md">
          Home
        </a>
      </Link>

      <a
        href="https://github.com/slingercode"
        rel="noreferrer"
        target="_blank"
        className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
      >
        Github
      </a>

      <a
        href="https://twitter.com/_slingercode"
        rel="noreferrer"
        target="_blank"
        className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
      >
        Twitter
      </a>

      <HeaderMenu />
    </div>
  </header>
);

export default Header;
