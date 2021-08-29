import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { PaintingsContext } from "../store/PaintingsStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PaintingsContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PaintingsContext>
  );
}

export default MyApp;
