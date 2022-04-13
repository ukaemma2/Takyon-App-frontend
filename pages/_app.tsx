import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <Head>
        <meta name="takyon - home" content="Takyon homepage" />
        <title>Takyon - Home</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
