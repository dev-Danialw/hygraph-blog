import React, { useReact, useEffect } from "react";
import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
