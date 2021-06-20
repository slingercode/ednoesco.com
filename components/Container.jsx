import Head from 'next/head';

const Container = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    {children}
  </>
);

Container.defaultProps = {
  title: 'Slingercode',
};

export default Container;
