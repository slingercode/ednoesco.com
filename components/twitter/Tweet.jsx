import Image from 'next/image';
import { reform } from 'gregorian';

import { getUrlForTwitterMedia } from '../../utils/helpers';

const dateFormat = reform('N, d Y G:T P');

const Tweet = ({ tweet }) => (
  <div className="flex flex-col justify-between border rounded p-4">
    <div className="flex flex-col">
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src={tweet.author.profile_image_url}
          className="rounded-full"
        />

        <div className="ml-4">
          <h1>{tweet.author.name}</h1>
          <p className="text-sm">{`@${tweet.author.username}`}</p>
        </div>
      </div>

      <div className="flex mt-4">{tweet.text}</div>

      <div className="flex mt-4">
        {tweet.media.map((media) => (
          <Image
            key={media.media_key}
            width={media.width}
            height={media.height}
            src={media[getUrlForTwitterMedia(media.type)]}
          />
        ))}
      </div>

      <div className="flex justify-between mt-2 text-xs pb-4">
        <div>{dateFormat(new Date(tweet.created_at))}</div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="flex">
        <div className="flex items-center hover:text-green-solid cursor-pointer mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ml-1">{tweet.public_metrics.retweet_count}</span>
        </div>

        <div className="flex items-center hover:text-red-solid cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ml-1">{tweet.public_metrics.like_count}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Tweet;
