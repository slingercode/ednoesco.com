import { Fragment } from 'react';
import Link from 'next/link';

import Title from '../notion/Title';
import renderBlock from '../notion/Block';

const Page = ({ page, blocks }) => {
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
        {blocks.map((block) => (
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
