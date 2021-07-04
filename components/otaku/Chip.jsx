import React from 'react';
import clsx from 'clsx';
import * as Tooltip from '@radix-ui/react-tooltip';

const messages = ['😏'];

const Chip = ({ name, color }) => (
  <Tooltip.Root>
    <Tooltip.Trigger
      as="span"
      className={clsx('rounded-sm px-2 text-xs', {
        ['cursor-pointer']: name === 'Yuri',
        ['bg-pink-solid text-black']: color === 'pink',
        ['bg-green-solid text-black']: color === 'green',
        ['bg-yellow-solid text-black']: color === 'yellow',
        ['bg-purple-solid text-white']: color === 'purple',
        ['bg-orange-solid text-black']: color === 'orange',
        ['bg-red-solid text-black']: color === 'red',
      })}
    >
      {name}
    </Tooltip.Trigger>

    {name === 'Yuri' && (
      <Tooltip.Content
        sideOffset={10}
        className="bg-gray-50 text-gray-800 px-2 rounded-sm"
      >
        {messages[Math.floor(Math.random() * messages.length)]}
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);

export default Chip;
