import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Calendar from '@/components/Events/Calendar';
import EventsHeader from '@/components/Events/Header';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import homePageStyles from '../../components/Homepage/homepage.module.scss';
import articleStyles from '../blog/blog-list.module.scss';
import BlogLink from '../blog/components/BlogLink';
import styles from './events.module.scss';

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
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('events');

  return {
    props: { footerText: footer, header, page: page.data },
  };
}

const Events = ({ header, footerText, page }) => {
  const [articles, setArticles] = useState({});
  const [articleNames, setArticleNames] = useState({});

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
      {header && <HeaderWrapper header={header} />}
      <div className={styles.contentContainer}>
        <Image
          className={homePageStyles['blue-circle']}
          src={blueCircle}
          alt="blue circle"
        />
        <Image
          className={homePageStyles['orange-circle']}
          src={orangeCircle}
          alt="orange circle"
        />
        <EventsHeader
          headerText={page?.header_title}
          subText={page?.header_subtitle}
          buttonText={page?.header_button_text}
        />
        <Calendar />
        <div className={styles.articlesContainer}>
          <div className={styles.articlesWrapper}>
            {Object.keys(articles).map(
              el =>
                !!articles[el].length && (
                  <div key={el} className={articleStyles['articles-wrapper']}>
                    <div className={articleStyles['articles-top-block']}>
                      <h2 className={articleStyles['articles-title']}>
                        {articleNames[el]}
                      </h2>
                      <Link
                        href={'/blog#events'}
                        className={articleStyles['articles-btn']}
                      >
                        See all
                      </Link>
                    </div>
                    <div className={articleStyles['articles-list']}>
                      {articles[el].map(article => (
                        <BlogLink key={article.uid} article={article} />
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>

      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </div>
  );
};

export default Events;
