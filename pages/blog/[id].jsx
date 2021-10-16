import useTranslation from 'next-translate/useTranslation';

import Container from '../../components/Container';
import Page from '../../components/blog/Page';
import Warning from '../../components/common/Warning';
import LinkLanguage from '../../components/blog/LinkLanguage';
import { getDatabase, getStaticData } from '../../lib/notion';

const Post = ({ page, blocks, i18n }) => {
  const { t } = useTranslation();

  if (!page || !blocks) {
    return <Container />;
  }

  return (
    <Container>
      {(!i18n.sameLanguage || !i18n.i18nEnglish || !i18n.i18nSpanish) && (
        <div className="mb-10">
          {!i18n.sameLanguage && (
            <Warning className="mb-2">{t('blog:diferent-language')}</Warning>
          )}

          {!i18n.spanish && <Warning>{t('blog:no-español')}</Warning>}

          {!i18n.english && <Warning>{t('blog:no-english')}</Warning>}
        </div>
      )}

      <div className="mb-10">
        {i18n.i18nEnglish && (
          <LinkLanguage
            id={i18n.english}
            i18n={i18n}
            locale="en-US"
            language="English"
          >
            {t('common:raw-english')}
          </LinkLanguage>
        )}

        {i18n.i18nSpanish && (
          <LinkLanguage
            id={i18n.spanish}
            i18n={i18n}
            locale="es-MX"
            language="Spanish"
          >
            {t('common:raw-spanish')}
          </LinkLanguage>
        )}
      </div>

      <Page
        title={page.properties.Name.title[0].text.content}
        blocks={blocks}
      />
    </Container>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_BLOG);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  try {
    const { locale } = context;
    const { id } = context.params;
    const { page, blocks } = await getStaticData(id);

    const language = page.properties.Language.select.name;
    const english = page.properties.English.rich_text[0]?.plain_text || '';
    const spanish = page.properties.Spanish.rich_text[0]?.plain_text || '';

    return {
      props: {
        page,
        blocks,
        i18n: {
          spanish,
          english,
          locale,
          language,
          sameLanguage:
            (locale === 'en-US' && language === 'English') ||
            (locale === 'es-MX' && language === 'Spanish'),
          i18nSpanish: spanish !== '',
          i18nEnglish: english !== '',
        },
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
