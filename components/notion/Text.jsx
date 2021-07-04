import clsx from 'clsx';

const Text = ({ id, text }) => {
  if (!text) {
    return null;
  }

  return (
    <>
      {text.map((value, index) => {
        const {
          text,
          annotations: { bold, code, italic, strikethrough, underline },
        } = value;

        return (
          <span
            key={`${id} - ${index}`}
            className={clsx({
              ['font-bold']: bold,
              ['font-mono bg-gray-300 px-2 py-1 rounded-md']: code,
              ['italic']: italic,
              ['line-through']: strikethrough,
              ['underline']: underline,
            })}
          >
            {text.link ? (
              <a
                className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
                href={text.link.url}
                rel="noreferrer"
                target="_blank"
              >
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export default Text;
