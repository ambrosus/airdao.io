import Banner from '@/components/Banner';
import Calendar from '@/components/Events/Calendar';
import EventsHeader from '@/components/Events/Header';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { useEffect, useState } from 'react';
import homePageStyles from '@/components/Homepage/homepage.module.scss';
import styles from './events.module.scss';
import ArticlesList from '@/components/ArticlesList';
import Seo from '@/components/Seo';

const getLastArticlesByType = async type => {
  const newClient = prismic.createClient('airdao-blog');

  return await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.blog_type', type)],
  });
};

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });
  const newClient = prismic.createClient('airdao-blog');

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('events');
  const latestArticles = await newClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      footerText: footer,
      header,
      page: page.data,
      banner,
      latestArticles,
    },
  };
}

const Events = ({ header, footerText, page, banner, latestArticles }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [articles, setArticles] = useState({});
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [articleNames, setArticleNames] = useState({});
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  // get events by types added on prismic event page
  const updateEvents = async () => {
    const lastArticlesByType = {};
    const types = [];
    const names = {};

    page?.events?.map(item => {
      types.push(item.event_type[0].text);
      names[item.event_type[0].text] = item.event_name[0].text;
    });

    for (let i = 0; i < types.length; i++) {
      lastArticlesByType[types[i]] = await getLastArticlesByType(types[i]);
    }

    setArticles(lastArticlesByType);
    setArticleNames(names);
  };

  useEffect(() => {
    updateEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={homePageStyles['homepage']}>
      <Seo
        title={page.meta_title}
        description={page.meta_description}
        image={page.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      {header && <HeaderWrapper header={header} showBanner={showBanner} />}
      <div className={styles.contentContainer}>
        <EventsHeader
          headerText={page?.header_title}
          subText={page?.header_subtitle}
          buttonText={page?.header_button_text}
        />
        <Calendar />
        <div style={{ marginTop: 96 }}>
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
      </div>

      {footerText && <Footer data={footerText.data} />}
    </div>
  );
};

export default Events;
