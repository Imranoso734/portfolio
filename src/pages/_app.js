import Theme from '../styles/theme';
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>{'Muhammad Imran'}</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
