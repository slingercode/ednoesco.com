import Text from './Text';

interface Props {
  id: string;
  text: any[] | null;
}

const Title = ({ id, text }: Props) => (
  <h1 className="text-4xl">
    <Text id={id} text={text} />
  </h1>
);

export default Title;
