import { Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Separator from '@radix-ui/react-separator';

import Title from '../notion/ArticleTitle';
import renderBlock from '../notion/Block';
import { pageTitle } from '../../utils/helpers';

const Page = ({ img, title, volumen, amazon, blocks }) => {
  const router = useRouter();

  return (
    <div>
      <Title>{pageTitle(title, volumen)}</Title>

      {amazon && (
        <div className="my-3">
          <a
            href={amazon}
            target="_blank"
            rel="noreferrer"
            className="text-blue-font-low text-lg focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
          >
            Amazon
          </a>
        </div>
      )}

      <Separator.Root className="bg-gray-border-non-interactive h-px mb-4 mt-1" />

      {img && (
        <div className="flex justify-center mb-4">
          <Image
            src={img}
            alt={pageTitle(title, volumen)}
            height={1250}
            width={900}
            className="rounded"
          />
        </div>
      )}

      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}

      <div className="mt-5">
        <button
          className="text-blue-font-low cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Page;
