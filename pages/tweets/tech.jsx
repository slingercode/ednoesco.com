import Container from '../../components/Container';
import Tweet from '../../components/twitter/Tweet';
import { getBlocks } from '../../lib/notion';
import { getTweets } from '../../lib/twitter';

const Tech = ({ tweets, errors }) => (
  <Container title="slingercode - tweets - tech 👨‍💻">
    {!!errors.length && <div>Errors</div>}

    <div className="grid gap-4 md:px-10 lg:px-24">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  </Container>
);

export const getStaticProps = async () => {
  const blocks = await getBlocks(process.env.NOTION_TECH_TWEETS);

  const ids = (blocks || [])
    .map(({ toggle }) => toggle?.text[0]?.plain_text || undefined)
    .filter((value) => value);

  const { tweets, errors } = await getTweets(ids);

  return {
    props: {
      tweets: tweets,
      errors: errors,
    },
    revalidate: 10,
  };
};

export default Tech;
