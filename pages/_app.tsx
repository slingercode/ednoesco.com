import { Text } from "../components/typography";
import Head from "../node_modules/next/head";

import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>slingercode</title>
      </Head>

      <main className="px-5 md:px-10 py-5">
        <Component {...pageProps} />
      </main>

      <footer className="mt-10 mb-5 flex justify-center text-mauve-low">
        <Text className="text-sm">{`MIT License; @_slingercode`}</Text>
      </footer>
    </>
  );
}

export default App;
