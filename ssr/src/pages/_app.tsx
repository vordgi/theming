import './index.sass';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Theming SSR</title>
        <meta
          name="description"
          content="Themization SSR example."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content={pageProps.theme === 'dark' ? '#00BCD4' : '#00838F'} />
        <meta name="reply-to" content="vordgi1@gmail.com" />
        <meta name="subject" content="Личный сайт" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="Савельев Александр" />
        <meta name="copyright" content="Савельев Александр" />
        <meta name="creator" content="Савельев Александр" />
        <meta name="owner" content="Савельев Александр" />
        <meta name="language" content="en" />
        <link rel="me" href="vordgi1@gmail.com" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/favicon-180x180.png" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
