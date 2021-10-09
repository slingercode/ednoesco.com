import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '../../components/Container';
import Article from '../../components/blogs/Article';
import usePosts from '../../hooks/blogs/usePosts';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => {
  const { locale } = useRouter();
  const { data } = usePosts(posts, locale);

  return (
    <Container title="slingercode - blogs">
      <div className="bg-yellow-solid text-gray-background-main">
        Warning if not blogs
      </div>

      <div className="my-5">
        {locale === 'en-US' && (
          <Link href="/blogs" locale="es-MX">
            A español
          </Link>
        )}

        {locale === 'es-MX' && (
          <Link href="/blogs" locale="en-US">
            To inglish
          </Link>
        )}
      </div>

      <div className="grid gap-4">
        {data.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.properties.Name.title[0].text.content}
            status={post.properties.Status.select.name}
            language={post.properties.Language.select.name}
          />
        ))}
      </div>
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

  const database = await getDatabase(process.env.NOTION_BLOGS, [], filter);

  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};

export default Index;
