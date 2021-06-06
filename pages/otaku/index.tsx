import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import Container from '@/components/Container';
import Text from '@/components/notion/Text';
import { getDatabase } from '@/lib/notion';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    {posts.map((post) => (
      <div key={post.id}>
        <Text
          id={post.id}
          text={
            post.properties.Name.type === 'title'
              ? post.properties.Name.title
              : null
          }
        />

        <Link href={`/otaku/${post.id}`}>
          <a>Dale</a>
        </Link>
      </div>
    ))}
  </Container>
);

export const getStaticProps = async () => {
  const database = await getDatabase(process.env.NOTION_TABLE_ID!);

  return {
    props: {
      posts: database,
    },
  };
};

export default Index;
