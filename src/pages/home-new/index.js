import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import { useState } from 'react';
import styles from '@/components/Homepage/homepage.module.scss';
import MainBlock from '@/components/Homepage/New/MainBlock';
import BackedBy from '@/components/Homepage/New/BackedBy';
import BannerRocket from '@/components/Homepage/New/Banner';
import ExploreProducts from '@/components/Homepage/New/ExploreProducts';
import BeInvolved from '@/components/Homepage/New/BeInvolved';
import Mission from '@/components/Homepage/New/Mission';
import RoadmapBlogAcademy from '@/components/Homepage/New/RoadmapBlogAcademy';
import Network from '@/components/Homepage/New/Network';
import News from '@/components/Homepage/New/News';

export default function Home({
  page,
  header,
  banner,
  footerText,
  latestBlogArticles,
}) {
  const { data } = page;
  const footerSlice = getFooterBlockSlice(data);
  const [showBanner, setShowBanner] = useState(data?.show_banner);

  // TODO: title, description from prismic
  const title = [
    {
      text: 'AirDAO is a transparent and accessible L1 blockchain for everyone',
      type: 'paragraph',
      spans: [],
    },
  ];

  const description = [
    {
      text: 'Boost your Web3 experience using the ecosystem tools.',
      type: 'paragraph',
      spans: [],
    },
  ];

  return (
    <div className={styles['homepage']}>
      <Head>
        <meta property="og:image" content="https://airdao.io/og.png" />
        <meta name="twitter:image" content="https://airdao.io/og.png" />
      </Head>
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      <HeaderWrapper header={header} showBanner={showBanner} />
      <MainBlock title={title} description={description} />
      <BackedBy />
      <BannerRocket />
      <ExploreProducts />
      <BeInvolved />
      <Mission />
      <RoadmapBlogAcademy />
      <Network />
      <News news={latestBlogArticles} />
      <Footer data={footerText.data} footerBlock="footer_mobile_apps" />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const blogClient = prismic.createClient('airdao-blog');

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('banner');
  const footer = await client.getSingle('footer');
  const latestBlogArticles = await blogClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      page,
      header,
      banner,
      footerText: footer,
      latestBlogArticles,
    },
  };
}
