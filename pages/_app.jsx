import AppContainer from '../components/AppContainer';

import ErrorBoundary from '../providers/ErrorBoundary';

import 'tailwindcss/tailwind.css';

const Slingercode = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </ErrorBoundary>
);

export default Slingercode;
