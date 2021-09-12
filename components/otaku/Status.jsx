import React, { useState } from 'react';
import {
  CheckIcon,
  RocketIcon,
  CountdownTimerIcon,
  ExclamationTriangleIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';

const getIcon = (status) => {
  switch (status) {
    case 'Owned':
      return (
        <span className="text-green-font-low">
          <CheckIcon height={24} width={24} />
        </span>
      );

    case 'Shipped':
      return (
        <span className="text-purple-font-low">
          <RocketIcon height={20} width={20} />
        </span>
      );

    case 'Pre-order':
      return (
        <span className="text-cyan-font-low">
          <CountdownTimerIcon height={20} width={20} />
        </span>
      );

    case 'Out of Stock':
      return (
        <span className="text-yellow-font-low">
          <ExclamationTriangleIcon height={18} width={18} />
        </span>
      );

    case 'Pending':
      return (
        <span className="text-crimson-font-low">
          <Cross2Icon height={20} width={20} />
        </span>
      );

    default:
      return <div />;
  }
};

const Status = ({ status }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip.Root open={open}>
      <Tooltip.Trigger
        asChild
        className="cursor-pointer appearance-none focus:outline-none"
      >
        <button onClick={() => setOpen(!open)}>{getIcon(status)}</button>
      </Tooltip.Trigger>

      <Tooltip.Content
        sideOffset={10}
        className="bg-gray-solid text-black px-2 rounded-sm"
      >
        {status}
        <Tooltip.Arrow className="text-gray-solid fill-current" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
};

export default Status;
