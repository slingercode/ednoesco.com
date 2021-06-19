import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Item = ({ onSelect, children }) => (
  <DropdownMenu.Item
    className="p-1 rounded-md text-gray-800 hover:bg-blue-400"
    onSelect={onSelect}
  >
    {children}
  </DropdownMenu.Item>
);

const HeaderMenu = () => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-gray-400 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-gray-50 p-2 mt-1 rounded-md">
        <Item onSelect={() => router.push('otaku')}>
          <Link href="otaku">Otaku</Link>
        </Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default HeaderMenu;
