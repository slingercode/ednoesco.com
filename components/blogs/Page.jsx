import { Fragment } from 'react';
import Link from 'next/link';

import Title from '../notion/ArticleTitle';
import renderBlock from '../notion/Block';

const Page = ({ title, blocks }) => (
  <div>
    <Title>{title}</Title>

    {blocks.map((block) => (
      <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    ))}

    <div className="mt-5">
      <Link href="/blogs">
        <a className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md">
          Go back
        </a>
      </Link>
    </div>
  </div>
);

export default Page;
