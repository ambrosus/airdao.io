import blueCircle from '@/assets/img/blue-circle.svg';
import orangeCircle from '@/assets/img/orange-circle.svg';
import Calendar from '@/components/Events/Calendar';
import EventsHeader from '@/components/Events/Header';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import Image from 'next/image';
import homePageStyles from '../../components/Homepage/homepage.module.scss';
import articleStyles from '../blog/blog-list.module.scss';
import BlogLink from '../blog/components/BlogLink';
import styles from './events.module.scss';

const articleTypes = ['news', 'events'];

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
  const page = await client.getSingle('buyamb');

  const lastArticlesByType = {};

  for (let i = 0; i < articleTypes.length; i++) {
    lastArticlesByType[articleTypes[i]] = await getLastArticlesByType(
      articleTypes[i],
    );
  }
  return {
    props: { footerText: footer, header, page: page.data, lastArticlesByType },
  };
}

const Events = ({ header, footerText, page, lastArticlesByType }) => {
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
          headerText={page?.title}
          subText={page?.subtitle}
          buttonText={'Add to calendar'}
        />
        <Calendar />
        <div className={styles.articlesContainer}>
          <div className={styles.articlesWrapper}>
            {Object.keys(lastArticlesByType).map(
              el =>
                !!lastArticlesByType[el].length && (
                  <div key={el} className={articleStyles['articles-wrapper']}>
                    <div className={articleStyles['articles-top-block']}>
                      <h2 className={articleStyles['articles-title']}>
                        {'Past'}
                      </h2>
                      <button
                        className={articleStyles['articles-btn']}
                        onClick={() => null}
                      >
                        See all
                      </button>
                    </div>
                    <div className={articleStyles['articles-list']}>
                      {lastArticlesByType[el].map(article => (
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
