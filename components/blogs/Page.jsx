import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Title from '../notion/ArticleTitle';
import renderBlock from '../notion/Block';

const Page = ({ title, blocks }) => {
  const router = useRouter();

  return (
    <div>
      <Title>{title}</Title>

      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}

      <div className="mt-5">
        <Link href="/blogs">
          <a
            className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
            onClick={() => router.back()}
          >
            Go back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Page;
