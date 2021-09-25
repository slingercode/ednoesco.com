import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

import Title from '../notion/ArticleTitle';
import Subtitle from '../notion/ArticleSubtitle';
import Genre from './Genre';
import Status from './Status';
import { pageTitle } from '../../utils/helpers';

const Page = ({ id, img, title, volumen, author, genres, status }) => (
  <div className="flex flex-col md:flex-row">
    {/* <div className="hidden md:flex w-full md:w-2/12">
      {img && (
        <Image
          src={img}
          alt={pageTitle()}
          height={172}
          width={100}
          className="rounded"
        />
      )}
    </div> */}

    <div className="flex w-full">
      <div className="flex flex-col w-11/12">
        <div>
          <Title>{pageTitle(title, volumen)}</Title>
        </div>

        <div className="mb-2">
          <Subtitle>{`By ${author}`}</Subtitle>
        </div>

        <div className="mb-2">
          {genres.map((genre) => (
            <div key={genre.id} className="">
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

      <div className="flex flex-row-reverse items-center w-1/12">
        <Status status={status.name} />
      </div>
    </div>
  </div>
);

export default Page;
