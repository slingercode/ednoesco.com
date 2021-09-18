import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const HeaderMenu = () => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Menu"
        className="bg-gray-background-component hover:bg-gray-background-hover active:bg-gray-background-active border border-gray-border-interactive hover:border-gray-border-hover p-2 rounded-md focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive"
      >
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={5}
        style={{ minWidth: 130 }}
        className="bg-gray-background-component p-1 rounded-md"
      >
        <DropdownMenu.Root>
          <DropdownMenu.Item
            className="p-1 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md hover:bg-gray-background-hover"
            onSelect={() => router.push('tweets/tech')}
          >
            <Link href="tweets/tech">
              <a className="flex">Tech Tweets</a>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="p-1 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md hover:bg-gray-background-hover"
            onSelect={() => router.push('timeline')}
          >
            <Link href="timeline">
              <a className="flex">Timeline</a>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.TriggerItem className="p-1 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md hover:bg-gray-background-hover">
            <div className="flex items-center justify-between">
              More
              <ChevronRightIcon />
            </div>
          </DropdownMenu.TriggerItem>

          <DropdownMenu.Content
            sideOffset={10}
            style={{ maxWidth: 150 }}
            className="bg-gray-background-component p-1 rounded-md"
          >
            <div className="text-gray-font-low text-xs p-2 flex items-center">
              This are my hobbies and my collections of some stuff. Just for fun
              🙃
            </div>

            <DropdownMenu.Separator className="bg-slingercode-fontColor h-px mb-1" />

            <DropdownMenu.Item
              className="hover:bg-gray-background-hover active:bg-gray-background-active p-1 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
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
