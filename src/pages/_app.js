import Head from "next/head";
import "styles/index.less";
import "styles/globals.less";
import Layout from "components/sharedLayout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Compaign</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
