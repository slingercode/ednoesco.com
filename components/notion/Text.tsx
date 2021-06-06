import clsx from 'clsx';

interface Props {
  id: string;
  text: any[] | null;
}

const Text = ({ id, text }: Props) => {
  if (!text) {
    return null;
  }

  return (
    <>
      {text.map((value, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        return (
          <span
            key={`${id} - ${index}`}
            style={color !== 'default' ? { color } : {}}
            className={clsx([
              bold ? 'font-bold' : '',
              code ? 'font-mono bg-gray-300 px-2 py-1 rounded-md' : '',
              italic ? 'italic' : '',
              strikethrough ? 'line-through' : '',
              underline ? 'underline' : '',
            ])}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
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
