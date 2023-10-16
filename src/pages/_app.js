import '@/styles/base/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer } from '@airdao/ui-library';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mersad = localFont({
  src: [
    {
      path: '../assets/fonts/Mersad_ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mersad_SemiBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Mersad_Bold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-mersad',
});

const rationell = localFont({
  src: [
    {
      path: '../assets/fonts/Rationell-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../assets/fonts/Rationell-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Rationell-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Rationell-Medium.otf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../assets/fonts/Rationell-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-rationell',
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${mersad.variable} ${rationell.variable}`}
    >
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>AirDAO | The World&apos;s First Fully Integrated L1</title>
        <meta
          property="og:title"
          content="AirDAO | The World's First Fully Integrated L1"
        />
        <meta
          name="twitter:title"
          content="AirDAO | The World's First Fully Integrated L1"
        />
        <meta
          property="og:description"
          content="AirDAO is a revolutionary decentralized web app that houses an ecosystem of handy dApps under a single browser tab."
        />
        <meta
          name="twitter:description"
          content="AirDAO is a revolutionary decentralized web app that houses an ecosystem of handy dApps under a single browser tab."
        />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NotificationContainer />
      <Component {...pageProps} />
    </main>
  );
}
