import React from 'react';
import clsx from 'clsx';
import * as Tooltip from '@radix-ui/react-tooltip';

const messages = ['😏', 'Bien hecho puerco'];

const Chip = ({ name, color }) => (
  <Tooltip.Root>
    <Tooltip.Trigger
      as="span"
      style={{ backgroundColor: color }}
      className={clsx('rounded-sm px-2', [
        name === 'Yuri' ? 'cursor-pointer' : 'cursor-default',
      ])}
    >
      {name}
    </Tooltip.Trigger>

    {name === 'Yuri' && (
      <Tooltip.Content className="bg-gray-50 text-gray-800 px-2 mt-1 rounded-sm">
        {messages[Math.floor(Math.random() * messages.length)]}
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);

export default Chip;
