import '@/styles/base/index.scss';
import '@/styles/bond-exchange.scss';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer, createAirdaoConfig } from '@airdao/ui-library';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    {
      path: '../assets/fonts/Rationell-Black.otf',
      weight: '900',
      style: 'extra-bold',
    },
  ],
  variable: '--font-rationell',
});

const queryClient = new QueryClient();

const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

const WC_PARAMS = {
  projectId: projectId,
  metadata: {
    name: 'AirDAO',
    description:
      'AirDAO is a transparent and accessible L1 blockchain for everyone',
    url: 'https://airdao.io/',
    icons: ['https://airdao.io/favicon.svg'],
  },
};

const config = createAirdaoConfig(WC_PARAMS, +chainId);

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${mersad.variable} ${rationell.variable}`}
    >
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Script id="google-gtm">
        {`
         (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-NB9VBWH');`}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z4QJE54Z4R"
      ></Script>
      <Script id="google-gtag">
        {`window.dataLayer = window.dataLayer || [];
            function gtag() {
            dataLayer.push(arguments);
          }
            gtag('js', new Date());

            gtag('config', 'G-Z4QJE54Z4R');`}
      </Script>
      <NotificationContainer />
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
