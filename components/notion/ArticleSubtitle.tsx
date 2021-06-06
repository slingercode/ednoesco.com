import Text from './Text';

interface Props {
  children: React.ReactNode;
}

const ArticleTitle = ({ children }: Props) => (
  <h3 className="text-lg font-medium">{children}</h3>
);

export default ArticleTitle;
