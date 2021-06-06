import Text from './Text';

interface Props {
  id: string;
  text: any[] | null;
}

const Title = ({ id, text }: Props) => (
  <h1 className="text-4xl border-b-2 mb-5 pb-2">
    <Text id={id} text={text} />
  </h1>
);

export default Title;
