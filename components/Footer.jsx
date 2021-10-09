import Link from 'next/link';
import * as Separator from '@radix-ui/react-separator';

const Footer = () => (
  <footer className="p-5 md:p-10 lg:px-28 lg:py-10 ">
    <Separator.Root className="h-px bg-gray-border-non-interactive" />

    <div className="flex justify-center mt-4">
      <Link href="/about" locale="en-US">
        <a className="text-gray-font-low">about</a>
      </Link>
    </div>
  </footer>
);

export default Footer;
