import Image from 'next/image';
import { reform } from 'gregorian';
import { ChevronRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';

import { getUrlForTwitterMedia, formatTweetMetrics } from '../../utils/helpers';

const dateFormat = reform('N d, Y G:T P');

const TweetMedia = ({ media, total }) => (
  <div className="relative">
    <Image
      key={media.media_key}
      width={media.width}
      height={media.height}
      className="rounded-sm"
      alt="Media content"
      src={media[getUrlForTwitterMedia(media.type)]}
    />

    {(media.type === 'video' || media.type === 'animated_gif') && (
      <div className="bg-white text-blue-font-low rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 sm:h-20 sm:w-20 -m-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}

    {total > 1 && (
      <div className="absolute bottom-3 right-3 bg-gray-solid px-2 rounded-md">
        <div>Media +{total}</div>
      </div>
    )}
  </div>
);

const Tweet = ({ tweet }) => (
  <div className="flex flex-col justify-between border rounded p-4">
    <div className="flex flex-col">
      <a href={tweet.author.url} target="_blank" className="flex items-center">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          alt={`Profile picture: ${tweet.author.name}`}
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
          <div className="flex mt-4 justify-center">
            <TweetMedia media={tweet.media[0]} total={tweet.media.length} />
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

        <span className="ml-1">
          {formatTweetMetrics(tweet.public_metrics.like_count)}
        </span>

        <span className="ml-4">
          RT - {formatTweetMetrics(tweet.public_metrics.retweet_count)}
        </span>
      </div>

      <div className="flex items-center">
        <ChatBubbleIcon />

        <span className="ml-2 mr-4">
          {formatTweetMetrics(tweet.public_metrics.retweet_count)}
        </span>

        <ChevronRightIcon />
      </div>
    </a>
  </div>
);

export default Tweet;
