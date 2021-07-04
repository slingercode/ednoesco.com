import clsx from 'clsx';

const Text = ({ id, text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      text,
      annotations: { bold, code, italic, strikethrough, underline },
    } = value;

    if (text.link) {
      return (
        <a
          key={`${id} - ${index}`}
          className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
          href={text.link.url}
          rel="noreferrer"
          target="_blank"
        >
          {text.content}
        </a>
      );
    }

    return (
      <span
        key={`${id} - ${index}`}
        className={clsx({
          ['font-bold']: bold,
          ['italic']: italic,
          ['line-through']: strikethrough,
          ['underline']: underline,
          ['bg-gray-background-code text-gray-font-low font-mono px-2 py-1 rounded-md']:
            code,
        })}
      >
        {text.content}
      </span>
    );
  });
};

export default Text;
