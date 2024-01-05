import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import { useState } from 'react';
import Hero from 'src/components/Governance/Hero';
import Council from '../../components/Governance/Council';
import Proposals from '../../components/Governance/Proposals';

const GovernancePage = ({
  header,
  footerText,
  page,
  latestArticles,
  banner,
}) => {
  const footerSlice = getFooterBlockSlice(page.data);
  const [showBanner, setShowBanner] = useState(page?.data?.show_banner);

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://airdao.io/og-governance.png"
        />
        <meta
          name="twitter:image"
          content="https://airdao.io/og-governance.png"
        />
      </Head>
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      {header && <HeaderWrapper header={header} showBanner={showBanner} />}
      <div style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <Hero heading={page.data.heading} />
        <Proposals
          heading={page.data.subheading}
          lead={page.data.lead}
          proposals={page.data.proposals}
          snapshot={page.data.snapshot}
        />
        <Council
          heading={page.data.council_heading}
          text={page.data.council_text}
          council={page.data.council}
        />
        {/*<div className={styles['articles-wrapper']}>*/}
        {/*  <Image*/}
        {/*    className={styles['blue-circle']}*/}
        {/*    src={blueCircle}*/}
        {/*    alt="blue circle"*/}
        {/*  />*/}
        {/*  <Image*/}
        {/*    className={styles['orange-circle']}*/}
        {/*    src={orangeCircle}*/}
        {/*    alt="orange circle"*/}
        {/*  />*/}
        {/*  <ArticlesList*/}
        {/*    title={'Blog'}*/}
        {/*    subtitle={*/}
        {/*      'Discover articles, governance insights, events, and more'*/}
        {/*    }*/}
        {/*    goToText="Go to blog"*/}
        {/*    goToLink="/blog"*/}
        {/*    articles={latestArticles}*/}
        {/*  />*/}
        {/*</div>*/}
        {footerText && (
          <Footer
            slices={footerText.data.slices}
            socials={footerText.data.footer_social}
            footerBlock={footerSlice}
          />
        )}
      </div>
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const newClient = prismic.createClient('airdao-blog');

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('governance');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: { header, footerText: footer, page, latestArticles, banner },
  };
}

export default GovernancePage;
