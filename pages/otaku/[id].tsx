import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Title from '@/components/notion/Title';
import renderBlock from '@/components/notion/Block';
import { getDatabase, getPage, getBlocks } from '@/lib/notion';

export default function Post({
  page,
  blocks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <article>
      <Title
        id={page.id}
        text={
          page.properties.Name.type === 'title'
            ? page.properties.Name.title
            : null
        }
      />

      <section>
        {blocks.map((block: any) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>
    </article>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_TABLE_ID!);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as any;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  const blocksWithChildren = blocks.map((block: any) => {
    // Add child blocks if the block should contain children but none exists
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
    revalidate: 1,
  };
};
