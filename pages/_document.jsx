import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta property="og:title" content="This is the title" /> */}
          {/* <meta property="og:type" content="This is the title" /> */}
          {/* <meta property="og:url" content="This is the title" /> */}
          <meta property="og:image" content="/imgs/demo.jpg" />
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
