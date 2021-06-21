import Link from 'next/link';

import HeaderMenu from './common/HeaderMenu';

const Header = () => (
  <header className="p-5 md:p-10 lg:px-28 lg:py-10 flex flex-row-reverse">
    <div className="flex items-center">
      <Link href="/">
        <a className="mr-5">Home</a>
      </Link>

      <a
        className="mr-5"
        href="https://github.com/slingercode"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>

      <a
        className="mr-5"
        href="https://twitter.com/_slingercode"
        rel="noreferrer"
        target="_blank"
      >
        Twitter
      </a>

      <HeaderMenu />
    </div>
  </header>
);

export default Header;
