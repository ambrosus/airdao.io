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

  const lastArticlesByType = {};

  for (let i = 0; i < articleTypes.length; i++) {
    lastArticlesByType[articleTypes[i]] = await getLastArticlesByType(
      articleTypes[i],
    );
  }
  return {
    props: { footerText: footer, header, lastArticlesByType },
  };
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="slider-arrow"
    >
      <path
        d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
        fill="#212121"
      />
    </svg>
  ),
  prevArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="slider-arrow"
    >
      <path
        d="M8.40715 4.45305C8.01663 4.84357 8.01663 5.47674 8.40715 5.86726L14.7 12.1602L8.40715 18.453C8.01663 18.8436 8.01663 19.4767 8.40715 19.8673C8.79768 20.2578 9.43084 20.2578 9.82137 19.8673L16.8214 12.8673C17.2119 12.4767 17.2119 11.8436 16.8214 11.453L9.82136 4.45305C9.43084 4.06253 8.79768 4.06253 8.40715 4.45305Z"
        fill="#212121"
      />
    </svg>
  ),
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default function Blog({ header, footerText, lastArticlesByType }) {
  const [selectedType, setSelectedType] = useState('all');

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
        {header && <HeaderWrapper header={header} />}
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
                  <div key={el.uid} className={styles['slider-item']}>
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
                              <span className={styles['slider-item__subinfo']}>
                                {children} read
                              </span>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </div>
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

      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
}
