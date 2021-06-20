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
        ['bg-pink-300 text-gray-800']: color === 'pink',
        ['bg-green-400 text-gray-800']: color === 'green',
        ['bg-yellow-500 text-gray-800']: color === 'yellow',
        ['bg-purple-400 text-gray-800']: color === 'purple',
        ['bg-yellow-700 text-gray-50']: color === 'orange',
        ['bg-red-600 text-gray-50']: color === 'red',
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
