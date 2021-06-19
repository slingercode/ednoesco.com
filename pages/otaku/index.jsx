import Container from '../../components/Container';
import Article from '../../components/otaku/Article';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => (
  <Container>
    {posts.map((post) => (
      <Article
        key={post.id}
        id={post.id}
        text={
          post.properties.Name.type === 'title'
            ? post.properties.Name.title
            : null
        }
        volumen={
          post.properties.Volumen.type === 'number'
            ? post.properties.Volumen.number.toString()
            : ''
        }
        author={
          post.properties.Author.type === 'rich_text'
            ? post.properties.Author.rich_text
            : null
        }
        owned={
          post.properties.Owned.type === 'checkbox'
            ? post.properties.Owned.checkbox
            : false
        }
      />
    ))}
  </Container>
);

export const getStaticProps = async () => {
  const database = await getDatabase(process.env.NOTION_TABLE_ID);

  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};

export default Index;
