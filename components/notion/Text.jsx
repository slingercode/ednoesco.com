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
          annotations: { bold, code, color, italic, strikethrough, underline },
        } = value;

        return (
          <span
            key={`${id} - ${index}`}
            style={color !== 'default' ? { color } : {}}
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
                className="text-blue-500"
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
