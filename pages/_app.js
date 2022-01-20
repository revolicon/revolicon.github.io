import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth"
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Revolicon - Beautifully Crafted Open Source Icons</title>
        <meta name="title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta name="description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta name="keywords" content="Revolicon, Font Icon, Web Icon, Icons, Icon, SVG Icon, SVG, Font, Revolution" />

        <meta property="og:site_name" content="Revolicon" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revolicon.com/" />
        <meta property="og:title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta property="og:description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta property="og:image" content="#" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://revolicon.com/" />
        <meta property="twitter:title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta property="twitter:description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta property="twitter:image" content="#" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App