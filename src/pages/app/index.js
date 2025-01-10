import { createClient } from '@/prismicio';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './app.module.scss';
import BannerApp from '@/components/App/BannerApp';
import DownloadApp from '@/components/App/DownloadApp';

const SliderApp = dynamic(() => import('@/components/App/SliderApp'), {
  ssr: false,
});

export default function App({ header, footerText }) {
  return (
    <div className={styles.appPage}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og.png" />
        <meta name="twitter:image" content="https://airdao.io/og.png" />
      </Head>
      <HeaderWrapper header={header} showBanner={false} />
      <div className={styles.content}>
        <BannerApp data={footerText.data.downloadapp} />
        <SliderApp title="Explore app features" />
        <DownloadApp data={footerText.data.downloadapp} />
      </div>
      <Footer data={footerText.data} footerBlock={''} />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: {
      header,
      footerText: footer,
    },
  };
}
