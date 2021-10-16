import clsx from 'clsx';

const Warning = ({ className, children }) => (
  <div
    className={clsx(
      className,
      'px-4 py-2 rounded border border-yellow-solid text-yellow-font-low'
    )}
  >
    {children}
  </div>
);

Warning.defaultProps = { className: '' };

export default Warning;
