import "tailwindcss/tailwind.css";

import "../styles/globals.scss";

import { Layout } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
