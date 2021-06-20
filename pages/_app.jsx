import { ThemeProvider } from 'next-themes';

import AppContainer from '../components/AppContainer';

import 'tailwindcss/tailwind.css';

const Slingercode = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </ThemeProvider>
);

export default Slingercode;
