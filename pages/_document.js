import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
        <link rel="stylesheet" href="/styles/globals.css" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}