import { Fragment } from 'react';
import Link from 'next/link';

import Title from '@/components/notion/Title';
import renderBlock from '@/components/notion/Block';

interface Props {
  page: any;
  blocks: any[];
}

const Page = ({ page, blocks }: Props) => {
  return (
    <div>
      <Title
        id={page.id}
        text={
          page.properties.Name.type === 'title'
            ? page.properties.Name.title
            : null
        }
      />

      <div>
        {blocks.map((block: any) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </div>

      <div className="mt-5">
        <Link href="/otaku">
          <a className="text-blue-500">Go back</a>
        </Link>
      </div>
    </div>
  );
};

export default Page;
