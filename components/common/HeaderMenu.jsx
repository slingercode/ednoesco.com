import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuSub from './HeaderMenuSub';

const HeaderMenu = () => (
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
        <HeaderMenuItem link="/blog" label="Blog" />

        <DropdownMenu.Separator className="h-px bg-gray-border-non-interactive" />

        <HeaderMenuItem link="/events" label="Events" />

        <DropdownMenu.Separator className="h-px bg-gray-border-non-interactive" />

        <HeaderMenuSub label="Tweets">
          <HeaderMenuItem link="/tweets/tech" label="Tech" />

          <HeaderMenuItem link="/tweets/meme" label="Meme" />
        </HeaderMenuSub>

        <HeaderMenuSub
          label="Collections"
          description="This are my hobbies and my collections of some stuff. Just for fun 🙃"
        >
          <HeaderMenuItem link="/otaku" label="Otaku" />
        </HeaderMenuSub>
      </DropdownMenu.Root>

      <DropdownMenu.Arrow className="text-gray-background-component fill-current" />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default HeaderMenu;
