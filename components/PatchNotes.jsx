/**
 * Unusable ATM
 *
 * My plan was to create a modal for the notes to be available globaly,
 * but this requires to fetch the data in _app in order to pass the props
 * in the AppContainer and there is not a viable way to do this in this version
 */

import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';

const PatchNotes = () => (
  <Dialog.Root>
    <Dialog.Trigger className="text-gray-font-low">patch notes</Dialog.Trigger>

    <Dialog.Content className="bg-gray-background-main border-4 border-gray-border-non-interactive rounded-md fixed w-10/12 h-5/6 md:h-auto top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
      <Dialog.Title className="flex items-center justify-between mx-6 py-2 text-gray-font-low">
        <span className="text-2xl">Patch Notes</span>

        <Dialog.Close>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Dialog.Close>
      </Dialog.Title>

      <Separator.Root className="h-px bg-gray-border-non-interactive mx-3" />

      <div className="my-5">Content</div>
    </Dialog.Content>
  </Dialog.Root>
);

export default PatchNotes;
