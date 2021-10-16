import * as Separator from '@radix-ui/react-separator';

import Container from '../components/Container';
import Title from '../components/notion/ArticleTitle';
import Article from '../components/blog/Article';
import usePosts from '../hooks/blog/usePosts';
import { getDatabase } from '../lib/notion';

const Index = ({ blog }) => {
  const { data } = usePosts(blog, 'en-US');

  return (
    <Container>
      {!!data.length && (
        <div>
          <div className="w-full">
            <Title size="large">Blog Posts</Title>

            <Separator.Root className="h-px my-2 bg-gray-border-non-interactive" />
          </div>

          <div className="grid gap-4">
            {data.map((post) => (
              <Article
                key={post.id}
                id={post.id}
                title={post.properties.Name.title[0].text.content}
                description={
                  post.properties.Description.rich_text[0].plain_text
                }
                published={post.properties.Published.date.start}
              />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export const getStaticProps = async () => {
  const filter = {
    property: 'Status',
    select: {
      equals: 'Published',
    },
  };

  const database = await getDatabase(process.env.NOTION_BLOG, [], filter);

  return {
    props: {
      blog: database,
    },
    revalidate: 10,
  };
};

export default Index;
