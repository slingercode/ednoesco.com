import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

import HeaderMenu from './common/HeaderMenu';

const Header = () => (
  <header className="p-5 md:p-10 lg:px-28 lg:py-10 flex flex-row justify-between">
    <div className="flex items-center">
      <Link href="/" locale="en-US">
        <a className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md">
          @_slingercode
        </a>
      </Link>
    </div>

    <div className="flex items-center">
      <a
        href="https://slingercode.url.lol/github"
        rel="noreferrer"
        target="_blank"
        aria-label="github.com"
        className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
      >
        <GitHubLogoIcon height={20} width={20} />
      </a>

      <a
        href="https://slingercode.url.lol/twitter"
        rel="noreferrer"
        target="_blank"
        aria-label="twitter.com"
        className="mr-5 hover:text-gray-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
      >
        <TwitterLogoIcon height={20} width={20} />
      </a>

      <HeaderMenu />
    </div>
  </header>
);

export default Header;
