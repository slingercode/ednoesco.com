import Image from 'next/image';
import { reform } from 'gregorian';
import { ChevronRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';

import { getUrlForTwitterMedia } from '../../utils/helpers';

const dateFormat = reform('N, d Y G:T P');

const Tweet = ({ tweet }) => (
  <div className="flex flex-col justify-between border rounded p-4">
    <div className="flex flex-col">
      <a href={tweet.author.url} target="_blank" className="flex items-center">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          src={tweet.author.profile_image_url}
        />

        <div className="ml-4">
          <h1>{tweet.author.name}</h1>
          <p className="text-sm">{`@${tweet.author.username}`}</p>
        </div>
      </a>

      <a href={tweet.url} target="_blank">
        <div className="flex mt-4 leading-normal whitespace-pre-wrap">
          {tweet.text}
        </div>

        {!!(tweet.media || []).length && (
          <div className="flex mt-4">
            {tweet.media.map((media) => (
              <Image
                key={media.media_key}
                width={media.width}
                height={media.height}
                className="rounded-sm"
                src={media[getUrlForTwitterMedia(media.type)]}
              />
            ))}
          </div>
        )}
      </a>

      <div className="flex justify-between text-xs mt-2">
        <div>{dateFormat(new Date(tweet.created_at))}</div>
      </div>

      {!!(tweet.referenced_tweets || []).length && (
        <div className="mt-4">
          {(tweet.referenced_tweets || []).map((refTweet) => (
            <Tweet key={refTweet.id} tweet={refTweet} />
          ))}
        </div>
      )}
    </div>

    <a
      href={tweet.url}
      target="_blank"
      className="flex justify-between mt-4 text-sm"
    >
      <div className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        <span className="ml-1">{tweet.public_metrics.like_count}</span>

        <span className="ml-4">RT - {tweet.public_metrics.retweet_count}</span>
      </div>

      <div className="flex items-center">
        <ChatBubbleIcon />

        <span className="ml-2 mr-4">
          {tweet.public_metrics.retweet_count} replies
        </span>

        <ChevronRightIcon />
      </div>
    </a>
  </div>
);

export default Tweet;
