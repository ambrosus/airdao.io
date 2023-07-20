import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './blog-list.module.scss';
import BlogLink from '@/pages/blog/components/BlogLink';
import { useEffect, useMemo, useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
const articleTypes = ['news', 'governance', 'academy', 'events'];

const getLastArticlesByType = async (type) => {
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
  const lastArticles = {};

  for (let i = 0; i < articleTypes.length; i++) {
    lastArticles[articleTypes[i]] = await getLastArticlesByType(
      articleTypes[i]
    );
  }
  return {
    props: { footerText: footer, header, lastArticles },
  };
}
export default function Blog({ header, footerText, lastArticles }) {
  const [selectedType, setSelectedType] = useState('all');
  const [paginatedData, setPaginatedData] = useState(null);

  const activeTypes = useMemo(() => {
    const arr = [];

    Object.keys(lastArticles).forEach((el) => {
      if (lastArticles[el].length) {
        arr.push(el);
      }
    });
    return arr;
  }, [lastArticles]);

  useEffect( () => {
    if (selectedType === 'all') {
      setPaginatedData(null);
    } else {
      setPaginatedArticles(1);
    }
  }, [selectedType]);

  const setPaginatedArticles = async (page) => {
    const newClient = prismic.createClient('airdao-blog');

    const articles = await newClient.getByType('blog', {
      page,
      pageSize: 9,
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      filters: [prismic.filter.at('my.blog.blog_type', selectedType)],
    });
    setPaginatedData(articles);
  };

  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles['blog-list-page']}>
        <div className={styles['blog-types']}>
          {['all', ...activeTypes].map((el) => (
            <button
              className={`${styles['blog-types__item']} ${
                selectedType === el ? styles['blog-types__item_active'] : ''
              }`}
              key={el}
              onClick={() => setSelectedType(el)}
            >
              {el}
            </button>
          ))}
        </div>
        <h1 className={styles['blog-list-page__title']}>Blog</h1>
        <p className={styles['blog-list-page__subtitle']}>
          Discover news articles, governance insights, events, and AirDAO
          Academy resources. Learn, grow, and get inspired.
        </p>
        {selectedType === 'all'
          ? Object.keys(lastArticles).map(
              (el) =>
                !!lastArticles[el].length && (
                  <div key={el} className={styles['articles-wrapper']}>
                    <div className={styles['articles-top-block']}>
                      <h2 className={styles['articles-title']}>{el}</h2>
                      <button
                        className={styles['articles-btn']}
                        onClick={() => setSelectedType(el)}
                      >
                        See all
                      </button>
                    </div>
                    <div className={styles['articles-list']}>
                      {lastArticles[el].map((article) => (
                        <BlogLink key={article.uid} article={article} />
                      ))}
                    </div>
                  </div>
                )
            )
          : paginatedData && (
              <>
                <div
                  className={`${styles['articles-list']} ${styles['articles-list_pagination']}`}
                >
                  {paginatedData.results.map((el) => (
                    <BlogLink key={el.uid} article={el} />
                  ))}
                </div>
                <Pagination
                  currentPage={paginatedData.page}
                  totalPages={paginatedData.total_pages}
                  onPageChange={setPaginatedArticles}
                />
              </>
            )}
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          mobileLink={footerText.data.footer_mobile_link_url}
          mobileLinkText={footerText.data.footer_mobile_link_text}
          mobileText={footerText.data.footer_mobile_text}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
}
