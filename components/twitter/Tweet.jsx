import Image from 'next/image';

import { getUrlForTwitterMedia } from '../../utils/helpers';

const Tweet = ({ tweet }) => (
  <div className="border rounded p-4">
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

    <div className="flex justify-between mt-4">
      <div>{tweet.created_at}</div>

      <div className="flex">
        <div className="mr-4">rt {tweet.public_metrics.retweet_count}</div>
        <div>like {tweet.public_metrics.like_count}</div>
      </div>
    </div>
  </div>
);

export default Tweet;
