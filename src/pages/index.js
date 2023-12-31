import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Ambassadors from '@/components/Homepage/Ambassadors';
import App from '@/components/Homepage/App';
import Community from '@/components/Homepage/Community';
import MainBlock from '@/components/Homepage/MainBlock';
import shape from '@/components/Homepage/MainBlock/shape.svg';
import Mission from '@/components/Homepage/Mission';
import Network from '@/components/Homepage/Network';
import Products from '@/components/Homepage/Products';
import Semiblocks from '@/components/Homepage/Semiblocks';
import Team from '@/components/Homepage/Team';
import Marquee from '@/components/Marquee';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../components/Homepage/homepage.module.scss';

export default function Home({
  page,
  header,
  banner,
  footerText,
  latestArticles,
}) {
  const { data } = page;
  const footerSlice = getFooterBlockSlice(data);
  const [showBanner, setShowBanner] = useState(data?.show_banner);
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
      <div className={styles['main-block-wrapper']}>
        <Image
          className={styles['blue-circle']}
          src={blueCircle}
          alt="blue circle"
        />
        <Image
          className={styles['orange-circle']}
          src={orangeCircle}
          alt="orange circle"
        />
        <Image className={styles.shape} src={shape} alt="shape" />
        <Image
          className={`${styles.shape} ${styles['shape-right']}`}
          src={shape}
          alt="shape"
        />
        <MainBlock
          title={data.title}
          subtitle={data.subtitle}
          label={data.label}
          partners={data.partners}
          showBanner={showBanner}
        />
      </div>
      <Community
        text={data.text}
        primaryLink={data.primary_btn_link}
        primaryText={data.primary_btn_text}
        secondaryLink={data.secondary_btn_link}
        secondaryText={data.secondary_btn_text}
      />
      <Products title={data.product_title} products={data.products} />
      <Mission
        label={data.mission_label}
        title={data.mission_title}
        text={data.mission_text}
      />
      <Marquee />
      <Team
        title={data.team_title}
        primaryText={data.team_primary_text}
        primaryLink={data.team_primary_link}
        image={data.team_image}
      />
      <Network
        title={data.network_title}
        label={data.network_label}
        primaryText={data.network_primary_text}
        primaryLink={data.network_primary_link}
        info={data.network_info}
      />
      <div className={styles['ambassadors-wrapper']}>
        <Image
          className={styles['blue-circle']}
          src={orangeCircle}
          alt="blue circle"
        />
        <Image
          className={styles['orange-circle']}
          src={blueCircle}
          alt="orange circle"
        />
        <Ambassadors
          label={data.ambassadors_label}
          title={data.ambassadors_title}
          text={data.ambassadors_text}
          images={data.ambassadors_images}
          primaryText={data.ambassadors_primary_text}
          primaryLink={data.ambassadors_primary_link}
          secondaryText={data.ambassadors_secondary_text}
          secondaryLink={data.ambassadors_secondary_link}
        />
      </div>
      <Semiblocks
        governanceTitle={data.governance_title}
        governanceText={data.governance_text}
        governanceLabel={data.governance_label}
        governancePrimaryLink={data.governance_primary_link}
        governancePrimaryText={data.governance_primary_text}
        governanceSecondaryLink={data.governance_secondary_link}
        governanceSecondaryText={data.governance_secondary_text}
        communityTitle={data.community_title}
        communityLabel={data.community_label}
        communityText={data.community_text}
        communityPrimaryText={data.community_primary_text}
        communityPrimaryLink={data.community_primary_link}
        communitySocials={data.community_socials}
      />
      <App
        title={data.app_title}
        list={data.app_list}
        appstore={data.app_appstore}
        google={data.app_google}
      />
      <div className={styles['articles-wrapper']}>
        <Image
          className={styles['blue-circle']}
          src={blueCircle}
          alt="blue circle"
        />
        <Image
          className={styles['orange-circle']}
          src={orangeCircle}
          alt="orange circle"
        />
        {/*<ArticlesList*/}
        {/*  title={asText(data.blog_title)}*/}
        {/*  subtitle={asText(data.blog_subtitle)}*/}
        {/*  goToText="Go to blog"*/}
        {/*  goToLink="/"*/}
        {/*  articles={latestArticles}*/}
        {/*/>*/}
      </div>
      <Footer
        slices={footerText.data.slices}
        socials={footerText.data.footer_social}
        footerBlock={footerSlice}
      />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const blogClient = prismic.createClient('airdao-blog');
  const academyClient = prismic.createClient('airdao-academy');

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
  const latestAcademyArticles = await academyClient.getAllByType('academy', {
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
      latestAcademyArticles,
    },
  };
}
