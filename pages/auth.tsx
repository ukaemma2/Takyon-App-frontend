import type { NextPage } from "next";
import Head from "next/head";

import Auth from "../components/auth";

const AuthPage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Authentication - Takyon</title>
        <meta name="description" content="Authentication page for Takyon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="auth-container">
        <Auth />
      </main>
    </div>
  );
};

export default AuthPage;
