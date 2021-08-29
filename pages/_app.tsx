import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { SlideshowContext } from "../store/SlideshowStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SlideshowContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SlideshowContext>
  );
}

export default MyApp;
