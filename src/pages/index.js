import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import MainBlock from '@/components/Homepage/MainBlock';
import Products from '@/components/Homepage/Products';
import Mission from '@/components/Homepage/Mission';
import Team from '@/components/Homepage/Team';
import Network from '@/components/Homepage/Network';
import Ambassadors from '@/components/Homepage/Ambassadors';
import Semiblocks from '@/components/Homepage/Semiblocks';
import Community from '@/components/Homepage/Community';
import * as prismic from '@prismicio/client';
import ArticlesList from '@/components/ArticlesList';
import styles from '../components/Homepage/homepage.module.scss';
import Marquee from '@/components/Marquee';
import Image from 'next/image';
import React from 'react';
import App from '@/components/Homepage/App';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';

export default function Home({ page, header, footerText, latestArticles }) {
  const { data } = page;
  return (
    <div className={styles['homepage']}>
      <HeaderWrapper header={header} />
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
        <MainBlock />
      </div>
      <Community />
      <Products />
      <Mission />
      <Marquee />
      <Team />
      <Network />
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
        <Ambassadors />
      </div>
      <Semiblocks />
      <App />
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
        <ArticlesList
          title="Blog"
          subtitle="Discover articles, governance insights, events, and more"
          goToText="Go to blog"
          goToLink="/"
          articles={latestArticles}
        />
      </div>
      <Footer
        slices={footerText.data.slices}
        mobileLink={footerText.data.footer_mobile_link_url}
        mobileLinkText={footerText.data.footer_mobile_link_text}
        mobileText={footerText.data.footer_mobile_text}
        socials={footerText.data.footer_social}
      />
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const newClient = prismic.createClient('airdao-blog');

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });
  return {
    props: { page, header, footerText: footer, latestArticles },
  };
}
