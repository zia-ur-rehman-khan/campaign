import Head from "next/head";
import "styles/index.less";
import "styles/globals.less";
import Layout from "components/sharedLayout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Compaign</title>
      </Head>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
