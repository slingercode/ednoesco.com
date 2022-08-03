import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Noel Espino personal website" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Noel Espino" />
        <meta
          property="og:description"
          content="Welcome! to my personal web page 🙃"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dj4s8gwk9/image/upload/v1658541301/slingercode/og_dfynin"
        />
      </Head>

      <body className="bg-mauve-bg text-mauve-high">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
