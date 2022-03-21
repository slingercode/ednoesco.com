import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import {
  GearIcon,
  Cross1Icon,
  LockClosedIcon,
  LockOpen2Icon,
} from '@radix-ui/react-icons';

const Config = ({ value, loading, handleAction }) => {
  const [checked, setChecked] = useState('indeterminate');

  const handleChecked = (value) =>
    value === false ? setChecked('indeterminate') : setChecked(true);

  return (
    <Popover.Root>
      <Popover.PopoverTrigger asChild>
        <button className="bg-gray-background-component hover:bg-gray-background-hover active:bg-gray-background-active text-gray-font-low hover:text-gray-font-high border-gray-border-interactive hover:border-gray-border-hover focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive border rounded-full h-7 w-7 inline-flex items-center justify-center">
          <GearIcon />
        </button>
      </Popover.PopoverTrigger>

      <Popover.Content
        sideOffset={10}
        className="rounded-md p-3 w-60 bg-gray-background-component"
      >
        <div className="flex justify-between">
          <div>Config</div>

          <div>
            <Popover.Close>
              <Cross1Icon />
            </Popover.Close>
          </div>
        </div>

        <div className="mt-2">
          <button
            disabled={loading}
            className="hover:bg-gray-background-hover active:bg-gray-background-active text-gray-font-low hover:text-gray-font-high border-gray-border-interactive hover:border-gray-border-hover focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive border w-full rounded-md"
            onClick={() => handleAction(value.id, 'decrement')}
          >
            restar
          </button>
        </div>

        <div className="mt-5 flex">
          <div className="w-5/6">
            <input
              disabled={checked === 'indeterminate'}
              placeholder="asdf"
              className="w-full px-2 py-1 flex-1 bg-gray-background-component hover:bg-gray-background-hover rounded-md border border-gray-border-interactive hover:border-gray-border-hover focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-border-interactive focus-visible:border-gray-border-hover"
            />
          </div>

          <div className="w-1/6 flex justify-center items-center ml-3">
            <Checkbox.Root
              checked={checked}
              className="border-gray-border-interactive hover:border-gray-border-hover text-gray-font-low hover:text-gray-font-high border h-8 w-8 rounded-md flex justify-center items-center"
              // onCheckedChange={handleChecked}
            >
              <Checkbox.Indicator>
                {checked === 'indeterminate' && <LockClosedIcon />}
                {checked === true && <LockOpen2Icon />}
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            disabled={checked === 'indeterminate'}
            className="hover:bg-gray-background-hover active:bg-gray-background-active text-gray-font-low hover:text-gray-font-high border-gray-border-interactive hover:border-gray-border-hover focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive border px-2 py-1 text-sm rounded-md"
          >
            Editar
          </button>
        </div>
        <Popover.Arrow className="text-gray-background-component fill-current" />
      </Popover.Content>
    </Popover.Root>
  );
};

export default Config;
