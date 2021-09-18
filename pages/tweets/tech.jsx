import Container from '../../components/Container';
import Tweet from '../../components/twitter/Tweet';
import { getTweets } from '../../lib/twitter';

const Tech = ({ tweets, errors }) => (
  <Container title="Tweets">
    {!!errors.length && <div>Errors</div>}

    <div>
      {tweets.map((tweet, index) => (
        <div key={tweet.id} className={`${index !== 0 ? 'mt-10' : ''}`}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </div>
  </Container>
);

export const getStaticProps = async () => {
  const { tweets, errors } = await getTweets([
    '1382957082631032833',
    '1405132521231224836',
    '1439000738278125570',
  ]);

  return {
    props: {
      tweets: tweets,
      errors: errors,
    },
  };
};

export default Tech;
