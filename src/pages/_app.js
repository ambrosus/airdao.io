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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${mersad.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
