import Container from '../../components/Container';
import Article from '../../components/blogs/Article';
import usePosts from '../../hooks/blogs/usePosts';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => {
  const { data } = usePosts(posts);

  return (
    <Container title="slingercode - blogs">
      <div className="grid gap-4">
        {data.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.properties.Name.title[0].text.content}
            status={post.properties.Status.select.name}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const database = await getDatabase(process.env.NOTION_BLOGS);

  return {
    props: {
      posts: database,
    },
  };
};

export default Index;
