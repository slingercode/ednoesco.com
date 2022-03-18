import clsx from 'clsx';

import Text from './Text';

const Callout = ({ id, color, icon, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div
      className={clsx('p-5 flex items-center rounded-md', {
        ['bg-yellow-background-component']: color === 'yellow_background',
      })}
    >
      <span className="text-2xl mr-4">{icon}</span>
      <Text id={id} text={text} />
    </div>
  );
};

export default Callout;
