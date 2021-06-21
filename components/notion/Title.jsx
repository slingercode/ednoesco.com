import Text from './Text';

const Title = ({ id, text }) => (
  <h1 className="text-4xl border-b-2 mb-5 pb-2 text-slingercode-accent">
    <Text id={id} text={text} />
  </h1>
);

export default Title;
