import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    // eslint-disable-next-line no-underscore-dangle
    const theme = this.props.__NEXT_DATA__.props?.pageProps?.theme || 'light';
    return (
      <Html lang="ru" className={`theme-${theme}`}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
