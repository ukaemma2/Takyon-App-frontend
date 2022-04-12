import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home - Takyon</title>
        <meta name="description" content="Homapage for Takyon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sml-container">
        <h1>Homepage</h1>
      </main>
    </div>
  );
};

export default HomePage;
