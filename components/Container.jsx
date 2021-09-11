import Head from 'next/head';

const Container = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Welcome! To my personal page" />
    </Head>

    {children}
  </>
);

Container.defaultProps = {
  title: 'Slingercode',
};

export default Container;
