import Link from 'next/link';
import * as Separator from '@radix-ui/react-separator';

const Footer = () => (
  <footer className="p-5 md:p-10 lg:px-28 lg:py-10 ">
    <Separator.Root className="h-px bg-gray-border-non-interactive" />

    <div className="mt-4 flex-col sm:flex sm:flex-row text-center sm:mx-60 sm:justify-between">
      <Link href="/about" locale="en-US">
        <a className="text-gray-font-low">about</a>
      </Link>

      <div>
        <Link href="/patch-notes" locale="en-US">
          <a className="text-gray-font-low">patch notes</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
