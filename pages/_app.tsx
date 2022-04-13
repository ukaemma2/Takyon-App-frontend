import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment } from "react";
import Head from "next/head";
import AuthProvider from "@context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 20,
      staleTime: Infinity,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
      <Head>
        <title>Takyon</title>
      </Head>
      {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
      {/* </QueryClientProvider> */}
  
    </Fragment>
  );
}

export default MyApp;
