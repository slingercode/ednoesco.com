import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import config from '../utils/config.json';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config['og-title']} />
          <meta property="og:description" content={config['og-description']} />
          <meta property="og:image" content={config['og-image']} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@_slingercode" />
          <meta property="twitter:creator" content="@_slingercode" />
          <meta property="twitter:title" content={config['og-title']} />
          <meta
            property="twitter:description"
            content={config['og-description']}
          />
          <meta property="twitter:image" content={config['og-image']} />
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
