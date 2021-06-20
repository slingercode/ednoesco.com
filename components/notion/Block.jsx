import Text from './Text';

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'heading_1':
      return (
        <h1 className="text-2xl mb-2">
          <Text id={id} text={value.text} />
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="text-xl mb-2">
          <Text id={id} text={value.text} />
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="text-lg mb-2">
          <Text id={id} text={value.text} />
        </h3>
      );

    case 'paragraph':
      if (value.text.length === 0) {
        return <div className="h-5" />;
      }

      return (
        <p className="text-md">
          <Text id={id} text={value.text} />
        </p>
      );

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="mb-2">
          <Text id={id} text={value.text} />
        </li>
      );

    default:
      return;
  }
};

export default renderBlock;
