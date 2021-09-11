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
            content="https://cdn.discordapp.com/attachments/473563114986536972/839346414768619540/1612541918766.jpg"
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
            content="https://cdn.discordapp.com/attachments/473563114986536972/839346414768619540/1612541918766.jpg"
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
