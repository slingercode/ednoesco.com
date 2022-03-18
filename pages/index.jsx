import Image from 'next/image';
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
      <div className="md:px-10 flex">
        <div className="w-4/6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl">Noel Espino</h1>

          <div className="pt-2">
            <h2 className="text-md md:text-xl lg:text-2xl text-gray-font-low">
              {'React Developer at '}
              <span className="hover:text-green-font-low">
                <a
                  href="https://twitter.com/GrainChainIO"
                  rel="noreferrer"
                  target="_blank"
                >
                  @GrainChainIO
                </a>
              </span>
            </h2>
          </div>
        </div>

        <div className="w-2/6 flex justify-center items-center">
          <Image src="/me.png" width={150} height={150} alt="me" />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl text-center">
          Hi! Welcome to my little space on the wide internet 😁
        </h3>

        <div className="md:px-8 lg:px-15 xl:px-32 my-10">
          <p className="text-sm text-justify">
            This is my personal web page in which i want to leave my digital
            fingerprint (a healthy one), share my hobbies and start writing some
            of my interests as a remainder on how I'm improving 🙂
          </p>
        </div>
      </div>

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
