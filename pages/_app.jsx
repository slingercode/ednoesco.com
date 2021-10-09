import { IdProvider } from '@radix-ui/react-id';
import { appWithTranslation } from 'next-i18next';

import AppContainer from '../components/AppContainer';

import 'tailwindcss/tailwind.css';

const Slingercode = ({ Component, pageProps }) => (
  <IdProvider>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </IdProvider>
);

export default appWithTranslation(Slingercode);
