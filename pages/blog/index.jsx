import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import Container from '../../components/Container';
import Article from '../../components/blog/Article';
import Warning from '../../components/common/Warning';
import usePosts from '../../hooks/blog/usePosts';
import { getDatabase } from '../../lib/notion';

const Index = ({ posts }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { data } = usePosts(posts, locale);

  if (!data.length) {
    return null;
  }

  return (
    <Container title="slingercode - blogs">
      <Warning className="flex mb-10">
        <div className="flex items-center">
          <ExclamationTriangleIcon height={20} width={20} />
        </div>

        <div className="flex flex-col pl-5">
          <div>{t('blog:alert')}</div>

          <div>
            {t('blog:change-language')}
            <span className="pl-1 underline font-bold">
              {locale === 'en-US' && (
                <Link href="/blog" locale="es-MX">
                  <a>{t('common:spanish')}</a>
                </Link>
              )}

              {locale === 'es-MX' && (
                <Link href="/blog" locale="en-US">
                  <a>{t('common:english')}</a>
                </Link>
              )}
            </span>
          </div>
        </div>
      </Warning>

      <div className="grid gap-4">
        {data.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.properties.Name.title[0].text.content}
            description={post.properties.Description.rich_text[0].plain_text}
            published={post.properties.Published.date.start}
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

  const database = await getDatabase(process.env.NOTION_BLOG, [], filter);

  return {
    props: {
      posts: database,
    },
    revalidate: 10,
  };
};

export default Index;
