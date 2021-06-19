import React from 'react';
import Link from 'next/link';

import Title from '../notion/ArticleTitle';
import Subtitle from '../notion/ArticleSubtitle';
import Text from '../notion/Text';

const Page = ({ id, text, volumen, author, owned }) => {
  return (
    <div className="flex mb-5">
      <div className="w-11/12">
        <div className="mb-1">
          <Title>
            <>
              <Text id={id} text={text} />
              {` Vol. ${volumen}`}
            </>
          </Title>
        </div>

        <div className="mb-2">
          <Subtitle>
            {`By `}
            <Text id={id} text={author} />
          </Subtitle>
        </div>

        <div>
          <Link href={`/otaku/${id}`}>
            <a className="text-blue-500">WTF is this?</a>
          </Link>
        </div>
      </div>

      <div className="w-1/12 flex justify-center items-center">
        {owned ? '✅' : ''}
      </div>
    </div>
  );
};

export default Page;
