import "../styles/globals.scss";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";
import {Container} from '@material-ui/core'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <title>Takyon</title>
    </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
  </Fragment>
  );
}

export default MyApp;
