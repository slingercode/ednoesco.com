import Text from './Text';

interface Props {
  children: React.ReactNode;
}

const ArticleTitle = ({ children }: Props) => (
  <h1 className="text-2xl font-semibold">{children}</h1>
);

export default ArticleTitle;
