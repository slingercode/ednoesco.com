import Container from '../../components/Container';
import Tweet from '../../components/twitter/Tweet';
import { getBlocks } from '../../lib/notion';
import { getTweets } from '../../lib/twitter';

const Tech = ({ tweets, errors }) => (
  <Container title="Tweets">
    {!!errors.length && <div>Errors</div>}

    <div className="grid gap-5 md:grid-flow-row md:grid-cols-2 md:grid-rows-1">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  </Container>
);

export const getStaticProps = async () => {
  const blocks = await getBlocks(process.env.NOTION_TABLE_TWEETS_ID);

  const ids = (blocks || [])
    .map(({ toggle }) => toggle?.text[0]?.plain_text || undefined)
    .filter((value) => value);

  const { tweets, errors } = await getTweets(ids);

  return {
    props: {
      tweets: tweets,
      errors: errors,
    },
  };
};

export default Tech;
