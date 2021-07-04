import Container from '../../components/Container';
import Article from '../../components/otaku/Article';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => (
  <Container title="Slingercode - Otaku">
    {posts.map((post) => (
      <Article
        key={post.id}
        id={post.id}
        title={post.properties.Name.title[0].text.content}
        volumen={post.properties.Volumen.number.toString()}
        author={post.properties.Author.rich_text[0].text.content}
        genres={post.properties.Genres.multi_select}
        status={post.properties.Status.select}
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
