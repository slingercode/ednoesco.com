import Container from '../../components/Container';
import Article from '../../components/otaku/Article';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => (
  <Container>
    {posts.map((post) => (
      <Article
        key={post.id}
        id={post.id}
        text={post.properties.Name.title}
        volumen={post.properties.Volumen.number.toString()}
        author={post.properties.Author.rich_text}
        genres={post.properties.Genres.multi_select}
        owned={post.properties.Owned.checkbox}
      />
    ))}
  </Container>
);

export const getStaticProps = async () => {
  const sorts = [
    {
      property: 'Name',
      direction: 'ascending',
    },
    {
      property: 'Volumen',
      direction: 'ascending',
    },
  ];

  const database = await getDatabase(process.env.NOTION_TABLE_ID, sorts);

  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};

export default Index;
