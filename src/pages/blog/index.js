import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Pagination from '@/components/Pagination/Pagination';
import BlogLink from '@/pages/blog/components/BlogLink';
import { createClient } from '@/prismicio';
import { getTimePassed } from '@/utils/getTimePassed';
import * as prismic from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './blog-list.module.scss';

import { settings } from './components/settings';

const articleTypes = ['news', 'governance', 'events', 'tech'];

const getLastArticlesByType = async type => {
  const newClient = prismic.createClient('airdao-blog');

  return await newClient.getAllByType('blog', {
    limit: 4,
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
  const banner = await client.getSingle('banner');
  const page = await client.getSingle('blog_page');

  const lastArticlesByType = {};

  for (let i = 0; i < articleTypes.length; i++) {
    lastArticlesByType[articleTypes[i]] = await getLastArticlesByType(
      articleTypes[i],
    );
  }
  return {
    props: {
      footerText: footer,
      header,
      lastArticlesByType,
      page: page.data,
      banner,
    },
  };
}

export default function Blog({
  header,
  footerText,
  lastArticlesByType,
  page,
  banner,
}) {
  const [selectedType, setSelectedType] = useState('all');
  const [showBanner, setShowBanner] = useState(page?.show_banner);

  const router = useRouter();
  const hash = router.asPath.slice(6);

  useEffect(() => {
    if (articleTypes.includes(hash)) {
      setSelectedType(hash);
    } else {
      setSelectedType('all');
    }
  }, [hash]);

  const [paginatedData, setPaginatedData] = useState(null);

  const articleList = useRef(null);

  const activeTypes = useMemo(() => {
    const arr = [];

    Object.keys(lastArticlesByType).forEach(el => {
      if (lastArticlesByType[el].length) {
        arr.push(el);
      }
    });
    return arr;
  }, [lastArticlesByType]);

  useEffect(() => {
    if (selectedType === 'all') {
      setPaginatedData(null);
    } else {
      setPaginatedArticles(1);
    }
  }, [selectedType]);

  const setPaginatedArticles = async (page, scrollTo) => {
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

    if (scrollTo) {
      window.scrollTo(0, scrollTo - 150);
    }
  };

  const handleSelectedType = type => {
    setSelectedType(type);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={styles['background_gray']}>
        {showBanner && (
          <Banner data={banner?.data} setShowBanner={setShowBanner} />
        )}
        {header && <HeaderWrapper header={header} showBanner={showBanner} />}
        <div className={`container ${styles.top}`}>
          <h1 className={styles['blog-list-page__title']}>Blog</h1>
          <p className={styles['blog-list-page__subtitle']}>
            Discover news articles, governance insights, events, and AirDAO
            Academy resources. Learn, grow, and get inspired.
          </p>
        </div>
      </div>

      {selectedType === 'all' ? (
        <>
          <div className={`${styles.buttons} container`}>
            <div className={styles['blog-types']}>
              <Link
                className={`${styles['blog-types__item']} ${
                  selectedType === 'all'
                    ? styles['blog-types__item_active']
                    : ''
                }`}
                href={'/blog'}
              >
                All
              </Link>
              {activeTypes.map(el => (
                <Link
                  className={`${styles['blog-types__item']} ${
                    selectedType === el ? styles['blog-types__item_active'] : ''
                  }`}
                  key={el}
                  href={'/blog#' + el}
                >
                  {el}
                </Link>
              ))}
            </div>
          </div>
          {Object.keys(lastArticlesByType).map(
            el =>
              !!lastArticlesByType[el].length && (
                <div key={el} className={styles['articles-wrapper']}>
                  <div className={`${styles['articles-top-block']} container`}>
                    <h2 className={styles['articles-title']}>{el}</h2>
                    <button
                      className={styles['articles-btn']}
                      onClick={() => handleSelectedType(el)}
                    >
                      See all
                    </button>
                  </div>
                  <div className={`${styles['articles-cards']} container`}>
                    {lastArticlesByType[el].slice(0, 3).map(article => (
                      <BlogLink
                        className={styles['articles__card']}
                        key={article.uid}
                        article={article}
                      />
                    ))}
                  </div>
                </div>
              ),
          )}
        </>
      ) : (
        paginatedData && (
          <>
            <div className={`${styles.buttons} container`}>
              <div className={styles['blog-types']}>
                <Link
                  className={`${styles['blog-types__item']} ${
                    selectedType === 'all'
                      ? styles['blog-types__item_active']
                      : ''
                  }`}
                  href={'/blog'}
                >
                  All
                </Link>
                {activeTypes.map(el => (
                  <Link
                    className={`${styles['blog-types__item']} ${
                      selectedType === el
                        ? styles['blog-types__item_active']
                        : ''
                    }`}
                    key={el}
                    href={'/blog#' + el}
                  >
                    {el}
                  </Link>
                ))}
              </div>
            </div>
            <div className={`${styles['slider-wrapper']} container`}>
              <Slider {...settings}>
                {lastArticlesByType[selectedType].map(el => (
                  <Link
                    key={el.uid}
                    href={`/blog/${el.uid}`}
                    className={styles['slider-item__link']}
                  >
                    <div className={styles['slider-item']}>
                      <img
                        src={el.data.article_link_img.url || '/article.png'}
                        alt="slider image"
                        className={styles['slider-item__img']}
                      />
                      <div className={styles['slider-item__info']}>
                        <p className={styles['slider-item__label']}>
                          LATEST RELEASE
                        </p>
                        <PrismicRichText
                          field={el.data.title}
                          components={{
                            paragraph: ({ children }) => (
                              <h3 className={styles['slider-item__title']}>
                                {children}
                              </h3>
                            ),
                          }}
                        />
                        <div className={styles['slider-item__bottom']}>
                          <span className={styles['slider-item__subinfo']}>
                            {getTimePassed(el.last_publication_date)}
                          </span>
                          <PrismicRichText
                            field={el.data.read_time}
                            components={{
                              paragraph: ({ children }) => (
                                <span
                                  className={styles['slider-item__subinfo']}
                                >
                                  {children} read
                                </span>
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>

            <div
              ref={articleList}
              className={`${styles['articles-list']} ${styles['articles-list_pagination']} container`}
            >
              {paginatedData.results.map(el => (
                <BlogLink key={el.uid} article={el} />
              ))}
            </div>
            <Pagination
              currentPage={paginatedData.page}
              totalPages={paginatedData.total_pages}
              onPageChange={e =>
                setPaginatedArticles(e, articleList.current.offsetTop)
              }
            />
          </>
        )
      )}

      {footerText && <Footer data={footerText.data} />}
    </>
  );
}
