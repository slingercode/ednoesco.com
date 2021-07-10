import React from 'react';
import clsx from 'clsx';
import * as Tooltip from '@radix-ui/react-tooltip';

const messages = ['😏', '🤭', '🥵'];

const Genre = ({ name, color }) => (
  <Tooltip.Root>
    <Tooltip.Trigger
      as="span"
      className={clsx('rounded-sm px-2 text-xs appearance-none', {
        ['cursor-pointer']: name === 'Yuri' || name === 'Ecchi',
        ['cursor-default']: name !== 'Yuri' || name !== 'Ecchi',
        ['bg-pink-solid text-black']: color === 'pink',
        ['bg-green-solid text-black']: color === 'green',
        ['bg-yellow-solid text-black']: color === 'yellow',
        ['bg-purple-solid text-white']: color === 'purple',
        ['bg-orange-solid text-black']: color === 'orange',
        ['bg-red-solid text-black']: color === 'red',
        ['bg-blue-solid text-black']: color === 'blue',
        ['bg-gray-background-code text-white border-2 border-gray-border-non-interactive']:
          color === 'default',
      })}
    >
      {name}
    </Tooltip.Trigger>

    {(name === 'Yuri' || name === 'Ecchi') && (
      <Tooltip.Content
        sideOffset={10}
        className="bg-gray-solid px-2 rounded-sm"
      >
        {messages[Math.floor(Math.random() * messages.length)]}
        <Tooltip.Arrow className="text-gray-solid fill-current" />
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);

export default Genre;
