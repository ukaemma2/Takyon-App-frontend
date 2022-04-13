import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment } from "react";
import AuthProvider from "@context/AuthContext";

  return (
    <Fragment>
      <Head>
        <meta name="takyon - home" content="Takyon homepage" />
        <title>Takyon - Home</title>
      </Head>


      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <Component {...pageProps} />
            </AuthProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>

    </Fragment>
  );
}

export default MyApp;
