import Head from 'next/head';

import config from '../utils/config.json';

const Container = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Head>

    {children}
  </>
);

Container.defaultProps = {
  title: config['og-title'],
  description: config['og-description'],
};

export default Container;
