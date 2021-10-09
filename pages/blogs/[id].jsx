import Container from '../../components/Container';
import Page from '../../components/blogs/Page';
import { getDatabase, getStaticData } from '../../lib/notion';

const Post = ({ page, blocks, i18n }) => {
  if (!page || !blocks) {
    return <Container />;
  }

  return (
    <Container>
      {!i18n && (
        <div className="bg-yellow-solid text-gray-background-main mb-5">
          Warning if blog not translated
        </div>
      )}

      <Page
        title={page.properties.Name.title[0].text.content}
        blocks={blocks}
      />
    </Container>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_BLOGS);

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

    if (
      (locale === 'en-US' && language === 'English') ||
      (locale === 'es-MX' && language === 'Spanish')
    ) {
      return {
        props: {
          page,
          blocks,
          i18n: true,
        },
        revalidate: 10,
      };
    }

    // if (locale === 'en-US' && english !== '') {
    //   return {
    //     redirect: {
    //       destination: `/es-MX/blogs/${english}`,
    //       permanent: false,
    //     },
    //   };
    // }

    // if (locale === 'es-MX' && spanish !== '') {
    //   console.log('here');
    //   return {
    //     redirect: {
    //       destination: `/blogs/${spanish}`,
    //       permanent: false,
    //     },
    //   };
    // }

    return {
      props: {
        page,
        blocks,
        i18n: false,
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
