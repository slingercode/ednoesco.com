export const getTweets = async (ids = []) => {
  try {
    const joined = ids.join(',');
    const expansions =
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id';
    const tweetFields =
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text';
    const userFields =
      'id,name,profile_image_url,protected,url,username,verified';
    const mediaFields =
      'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics';

    const response = await fetch(
      `https://api.twitter.com/2/tweets?ids=${joined}&expansions=${expansions}&tweet.fields=${tweetFields}&user.fields=${userFields}&media.fields=${mediaFields}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
        },
      }
    );

    const tweets = await response.json();

    const getAuthor = (authorId) =>
      (tweets?.includes?.users || []).find((author) => author.id === authorId);

    const getMedia = (mediaId) =>
      (tweets?.includes?.media || []).find(
        (media) => media.media_key === mediaId
      );

    const getReferencedTweet = (tweetId) => {
      const tweet = (tweets?.includes?.tweets || []).find(
        (tweet) => tweet.id === tweetId
      );

      return {
        id: tweet.id,
        author: getAuthor(tweet.author_id),
        text: tweet.text,
        created_at: tweet.created_at,
        public_metrics: tweet.public_metrics,
      };
    };

    return {
      tweets: (tweets?.data || []).map((tweet) => ({
        id: tweet.id,
        author: getAuthor(tweet.author_id),
        text: tweet.text,
        created_at: tweet.created_at,
        public_metrics: tweet.public_metrics,
        referenced_tweets: (tweet.referenced_tweets || []).map((_tweet) =>
          getReferencedTweet(_tweet.id)
        ),
        media: (tweet.attachments?.media_keys || []).map((key) =>
          getMedia(key)
        ),
      })),
      errors: tweets?.errors || [],
    };
  } catch (error) {
    return {
      tweets: [],
      errors: [],
    };
  }
};
