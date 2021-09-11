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
            content="https://cdn.discordapp.com/attachments/461523220219297796/886323680433569832/demo_1.jpeg"
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
            content="https://cdn.discordapp.com/attachments/461523220219297796/886323680433569832/demo_1.jpeg"
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
