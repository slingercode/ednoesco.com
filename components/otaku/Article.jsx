import React from 'react';
import Link from 'next/link';

import Title from '../notion/ArticleTitle';
import Subtitle from '../notion/ArticleSubtitle';
import Genre from './Genre';
import Status from './Status';

const Page = ({ id, title, volumen, author, genres, status }) => (
  <div className="flex mb-5">
    <div className="w-11/12">
      <div className="mb-1">
        <Title>{`${title} Vol. ${volumen}`}</Title>
      </div>

      <div className="mb-2">
        <Subtitle>{`By ${author}`}</Subtitle>
      </div>

      <div className="mb-2 flex">
        {genres.map((genre) => (
          <div key={genre.id} className="mr-2">
            <Genre name={genre.name} color={genre.color} />
          </div>
        ))}
      </div>

      <div>
        <Link href={`/otaku/${id}`}>
          <a className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md">
            WTF is this?
          </a>
        </Link>
      </div>
    </div>

    <div className="w-1/12 flex justify-center items-center">
      <Status status={status.name} />
    </div>
  </div>
);

export default Page;
