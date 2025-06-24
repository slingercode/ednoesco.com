import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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

      <DropdownMenu.Content
        sideOffset={5}
        style={{ minWidth: 130 }}
        className="bg-gray-50 p-1 rounded-md"
      >
        <DropdownMenu.Root>
          <DropdownMenu.TriggerItem className="p-1 rounded-md text-gray-800 cursor-pointer">
            <div className="flex items-center justify-between">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </DropdownMenu.TriggerItem>

          <DropdownMenu.Content
            sideOffset={10}
            style={{ maxWidth: 150 }}
            className="bg-gray-50 p-1 rounded-md"
          >
            <DropdownMenu.Item className="text-gray-400 text-xs p-2 flex items-center">
              This are my hobbies and my collections of some stuff. Just for fun
              🙃
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="bg-gray-200 h-px" />

            <DropdownMenu.Item
              className="p-1 rounded-md text-gray-800 hover:bg-blue-400"
              onSelect={() => router.push('otaku')}
            >
              <Link href="otaku">
                <a className="flex">Otaku</a>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default HeaderMenu;
