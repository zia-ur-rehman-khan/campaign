import Head from "next/head";
import "styles/index.less";
import "styles/globals.less";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Compaign</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
