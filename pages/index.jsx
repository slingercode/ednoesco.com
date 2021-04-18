import { useTheme } from 'next-themes';

import Container from '@/components/Container';

const Index = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <div className="flex justify-center items-center">
        <p>The current theme is: {theme}</p>
      </div>
    </Container>
  );
};

export default Index;
