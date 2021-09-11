import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="slingercode" />
          <meta
            property="og:description"
            content="Welcome! To my personal page"
          />
          <meta
            property="og:image"
            content="https://omg.lol/meta/img/card.png?v=2021-09-03_b"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@_slingercode" />
          <meta property="twitter:creator" content="@_slingercode" />
          <meta property="twitter:title" content="slingercode" />
          <meta
            property="twitter:description"
            content="Welcome! To my personal page"
          />
          <meta
            property="twitter:image"
            content="https://omg.lol/meta/img/card.png?v=2021-09-03_b"
          />
        </Head>

        <body className="bg-gray-background-main text-gray-font-high">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
