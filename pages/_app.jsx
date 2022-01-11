import AppContainer from '../components/AppContainer';

import 'tailwindcss/tailwind.css';

const Slingercode = ({ Component, pageProps }) => (
  <AppContainer>
    <Component {...pageProps} />
  </AppContainer>
);

export default Slingercode;
