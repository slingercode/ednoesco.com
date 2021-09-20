import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const HeaderMenuSub = ({ description, label, children }) => (
  <DropdownMenu.Root>
    <DropdownMenu.TriggerItem className="p-1 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md hover:bg-gray-background-hover">
      <div className="flex items-center justify-between">
        {label}
        <ChevronRightIcon />
      </div>
    </DropdownMenu.TriggerItem>

    <DropdownMenu.Content
      sideOffset={10}
      style={{ maxWidth: 150 }}
      className="bg-gray-background-component p-1 rounded-md"
    >
      {description && (
        <>
          <div className="text-gray-font-low text-xs p-2 flex items-center">
            {description}
          </div>

          <DropdownMenu.Separator className="bg-slingercode-fontColor h-px mb-1" />
        </>
      )}

      {children}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default HeaderMenuSub;
