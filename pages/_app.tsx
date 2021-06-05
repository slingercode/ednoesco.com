import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import AppContainer from '@/components/AppContainer';

import 'tailwindcss/tailwind.css';

const Slingercode = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </ThemeProvider>
);

export default Slingercode;
