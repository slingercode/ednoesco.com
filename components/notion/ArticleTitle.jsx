import clsx from 'clsx';

const ArticleTitle = ({ children, size }) => (
  <h1
    // className="text-4xl font-semibold text-gray-font-low"
    className={clsx('text-2xl font-semibold text-gray-font-low', {
      ['text-4xl']: size === 'large',
    })}
  >
    {children}
  </h1>
);

ArticleTitle.defaultProps = { size: 'normal' };

export default ArticleTitle;
