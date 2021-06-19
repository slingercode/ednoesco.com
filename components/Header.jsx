import Link from 'next/link';

import ToggleTheme from './common/ToggleTheme';
import HeaderMenu from './common/HeaderMenu';

const Header = () => {
  return (
    <header className="p-5 md:p-10 lg:px-28 lg:py-10 flex justify-between">
      <ToggleTheme />

      <div className="flex items-center">
        <Link href="/">
          <a className="mr-5">Home</a>
        </Link>

        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
