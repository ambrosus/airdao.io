import Hero from 'src/components/Governance/Hero';
import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import Proposals from '../../components/Governance/Proposals';
import Council from '../../components/Governance/Council';
import styles from '@/components/Homepage/homepage.module.scss';
import Image from 'next/image';
import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import ArticlesList from '@/components/ArticlesList';
import * as prismic from '@prismicio/client';
import { getFooterBlockSlice } from '@/utils/getFooterBlockSlice';

const GovernancePage = ({ header, footerText, page, latestArticles }) => {
  console.log(page);
  const footerSlice = getFooterBlockSlice(page.data);
  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div style={{ overflow: 'hidden', maxWidth: '100vw' }}>
        <Hero heading={page.data.heading} />
        <Proposals
          heading={page.data.subheading}
          lead={page.data.lead}
          proposals={page.data.proposals}
        />
        <Council
          heading={page.data.council_heading}
          text={page.data.council_text}
          council={page.data.council}
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
          <ArticlesList
            title={'Blog'}
            subtitle={
              'Discover articles, governance insights, events, and more'
            }
            goToText="Go to blog"
            goToLink="/blog"
            articles={latestArticles}
          />
        </div>
        {footerText && (
          <Footer
            slices={footerText.data.slices}
            mobileLink={footerText.data.footer_mobile_link_url}
            mobileLinkText={footerText.data.footer_mobile_link_text}
            mobileText={footerText.data.footer_mobile_text}
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
  const page = await client.getSingle('governance');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: { header, footerText: footer, page, latestArticles },
  };
}

export default GovernancePage;
