import { AppProps } from "next/app";
import Head from "next/head";

import { Text } from "../components/typography";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Noel Espino Córdova</title>
      </Head>

      <main className="px-5 md:px-10 py-5">
        <Component {...pageProps} />
      </main>

      <footer className="mt-10 mb-5 flex flex-col justify-center items-center text-yellow-high">
        <Text className="text-sm">{`MIT License; @_slingercode`}</Text>
      </footer>
    </>
  );
}

export default App;
