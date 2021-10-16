import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const HeaderMenuItem = ({ link, label }) => (
  <DropdownMenu.Item className="p-1 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md hover:bg-gray-background-hover">
    <Link href={link} locale="en-US">
      <a className="flex">{label}</a>
    </Link>
  </DropdownMenu.Item>
);

export default HeaderMenuItem;
