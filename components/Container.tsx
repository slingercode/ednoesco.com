import Head from 'next/head';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Container = ({ title, children }: Props) => (
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
