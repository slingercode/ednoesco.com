import Container from '../../components/Container';
import Page from '../../components/otaku/Page';
import { getDatabase, getPage, getBlocks } from '../../lib/notion';

const Post = ({ page, blocks }) => {
  if (!page || !blocks) {
    return <Container />;
  }

  return (
    <Container>
      <Page
        title={page.properties.Name.title[0].text.content}
        volumen={page.properties.Volumen?.number?.toString()}
        amazon={page.properties.Amazon?.url || undefined}
        blocks={blocks}
      />
    </Container>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_TABLE_ID);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => ({
        id: block.id,
        children: await getBlocks(block.id),
      }))
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }

    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 10,
  };
};

export default Post;
