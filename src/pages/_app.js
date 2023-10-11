import '@/styles/base/index.scss';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

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
      <Component {...pageProps} />
    </main>
  );
}
