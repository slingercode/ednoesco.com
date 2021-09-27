import Container from '../../components/Container';
import Page from '../../components/otaku/Page';
import { getDatabase, getStaticData } from '../../lib/notion';

const Post = ({ page, blocks }) => (
  <Container>
    <Page
      img={page.properties.Img?.url}
      title={page.properties.Name.title[0].text.content}
      volumen={page.properties.Volumen?.number?.toString()}
      amazon={page.properties.Amazon?.url || undefined}
      blocks={blocks}
    />
  </Container>
);

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_OTAKU);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  try {
    const { id } = context.params;
    const { page, blocks } = await getStaticData(id);

    return {
      props: {
        page,
        blocks,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default Post;
