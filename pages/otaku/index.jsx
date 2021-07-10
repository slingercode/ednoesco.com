import Container from '../../components/Container';
import Article from '../../components/otaku/Article';
import SearchBar from '../../components/otaku/SearchBar';
import Pagination from '../../components/otaku/Pagination';
import usePosts from '../../hooks/otaku/usePosts';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => {
  const {
    data,
    searchText,
    handleOnValueChange,
    currentPage,
    setCurrentPage,
    disablePrev,
    disableNext,
    total,
  } = usePosts(posts);

  return (
    <Container title="Slingercode - Otaku">
      <SearchBar handleOnValueChange={handleOnValueChange} />

      {data.map((post) => (
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

      <Pagination
        total={total}
        searchText={searchText}
        disablePrev={disablePrev}
        disableNext={disableNext}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

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
