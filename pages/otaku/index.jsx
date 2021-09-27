import Container from '../../components/Container';
import Article from '../../components/otaku/Article';
import Bonk from '../../components/otaku/Bonk';
import SearchBar from '../../components/otaku/SearchBar';
import Pagination from '../../components/otaku/Pagination';
import usePosts from '../../hooks/otaku/usePosts';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts, bonk }) => {
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
    <Container title="slingercode - otaku">
      {bonk && <Bonk />}

      <SearchBar handleOnValueChange={handleOnValueChange} />

      <div className="grid gap-4">
        {data.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            img={post.properties.Img?.url}
            title={post.properties.Name.title[0].text.content}
            volumen={post.properties.Volumen?.number?.toString()}
            author={post.properties.Author.rich_text[0].text.content}
            genres={post.properties.Genres.multi_select}
            status={post.properties.Status.select}
          />
        ))}
      </div>

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

export const getServerSideProps = async (context) => {
  const { bonk = '' } = context.query;

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

  const filter =
    bonk !== 'true'
      ? {
          and: [
            {
              property: 'Genres',
              multi_select: {
                does_not_contain: 'Yuri',
              },
            },
            {
              property: 'Genres',
              multi_select: {
                does_not_contain: 'Ecchi',
              },
            },
          ],
        }
      : undefined;

  const database = await getDatabase(process.env.NOTION_OTAKU, sorts, filter);

  return {
    props: {
      posts: database,
      bonk: bonk === 'true',
    },
  };
};

export default Index;
