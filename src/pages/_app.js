import Context from "@/services/context/general/context";

import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Word Game</title>
        <meta name="description" content="Word Game" />
        <link rel="icon" href="https://jvespid.github.io/apis/JV.ico" />
      </Head>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
