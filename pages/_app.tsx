import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
