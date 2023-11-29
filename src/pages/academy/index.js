/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import Pagination from '@/components/Pagination/Pagination';
import Select from '@/components/Select';
import AcademyLink from '@/pages/academy/components/AcademyLink';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './academy-list.module.scss';

const badges = ['All', 'Beginner', 'Intermediate', 'Pro'];

const getLastArticlesByType = async type => {
  const newClient = prismic.createClient('airdao-academy');

  return await newClient.getAllByType('academy', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.academy.academy_type', type)],
  });
};

export async function getStaticProps(context) {
  const client = createClient({ previewData: context.previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('academy_page');

  return {
    props: { footerText: footer, header, page: page.data },
  };
}

export default function Academy({ header, footerText, page }) {
  const [selectedType, setSelectedType] = useState('all');
  const [paginatedData, setPaginatedData] = useState(null);
  const [badge, setBadge] = useState(badges[0]);

  const articleList = useRef(null);

  const [articles, setArticles] = useState({});
  const [articleNames, setArticleNames] = useState([]);

  // get articles by types added on prismic academy page
  const updateAcademyCards = async () => {
    const lastArticlesByType = {};
    const types = [];
    const names = [];

    page?.types?.map(item => {
      types.push(item.type_name[0].text);
      names.push(item.type_name[0].text);
    });

    for (let i = 0; i < types.length; i++) {
      lastArticlesByType[types[i]] = await getLastArticlesByType(types[i]);
    }

    setArticles(lastArticlesByType);
    setArticleNames(names);
  };

  useEffect(() => {
    updateAcademyCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedType === 'all') {
      setPaginatedData(null);
    } else {
      setPaginatedArticles(1);
    }
  }, [selectedType]);

  const setPaginatedArticles = async (page, scrollTo) => {
    const newClient = prismic.createClient('airdao-academy');

    const academyArticles = await newClient.getByType('academy', {
      page,
      pageSize: 9,
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      filters: [prismic.filter.at('my.academy.academy_type', selectedType)],
    });
    setPaginatedData(academyArticles);

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
      <div className={styles['academy-gradient']} />
      {header && <HeaderWrapper header={header} />}
      <div className={styles['academy-list-page']}>
        <PrismicRichText
          field={page?.title}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['academy-list-page__title']}>{children}</p>
            ),
          }}
        />
        <PrismicRichText
          field={page?.subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className={styles['academy-list-page__subtitle']}>
                {children}
              </p>
            ),
          }}
        />
        {selectedType === 'all' ? (
          <>
            <div className={styles['academy-buttons']}>
              <div className={styles['academy-types']}>
                {['all', ...articleNames].map(el => (
                  <button
                    className={`${styles['academy-types__item']} ${
                      selectedType === el
                        ? styles['academy-types__item_active']
                        : ''
                    }`}
                    key={el}
                    onClick={() => setSelectedType(el)}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
            {Object.keys(articles).map(
              el =>
                !!articles[el].length && (
                  <div key={el} className={styles['articles-wrapper']}>
                    <div className={styles['articles-top-block']}>
                      <h2 className={styles['articles-title']}>{el}</h2>
                      <button
                        className={styles['articles-btn']}
                        onClick={() => handleSelectedType(el)}
                      >
                        See all
                      </button>
                    </div>
                    <div className={styles['articles-list']}>
                      {articles[el].map(article => (
                        <AcademyLink key={article.uid} article={article} />
                      ))}
                    </div>
                  </div>
                ),
            )}
          </>
        ) : (
          paginatedData && (
            <>
              <div className={styles['academy-buttons']}>
                <div className={styles['academy-types']}>
                  {['all', ...articleNames].map(el => (
                    <button
                      className={`${styles['academy-types__item']} ${
                        selectedType === el
                          ? styles['academy-types__item_active']
                          : ''
                      }`}
                      key={el}
                      onClick={() => setSelectedType(el)}
                    >
                      {el}
                    </button>
                  ))}
                </div>
                <div className={styles['badges-container']}>
                  <p className={styles['badges-text']}>Filter by difficulty</p>
                  <Select
                    placeholder="..."
                    options={badges}
                    className={styles['badges-selector']}
                    onChange={setBadge}
                    value={badge}
                  />
                </div>
              </div>
              <div
                ref={articleList}
                className={`${styles['articles-list']} ${styles['articles-list_pagination']}`}
              >
                {paginatedData.results.map(el => {
                  if (el?.data?.badge_type === badge || badge === 'All') {
                    // filter items by badges selector
                    return <AcademyLink key={el.uid} article={el} />;
                  }
                })}
              </div>
              {paginatedData.results.filter(
                // show pagination only if list contains 6+ items
                el => el?.data?.badge_type === badge,
              )?.length > 5 && (
                <Pagination
                  currentPage={paginatedData.page}
                  totalPages={paginatedData.total_pages}
                  onPageChange={e =>
                    setPaginatedArticles(e, articleList.current.offsetTop)
                  }
                />
              )}
            </>
          )
        )}
      </div>
      {footerText && (
        <Footer
          slices={footerText.data.slices}
          socials={footerText.data.footer_social}
        />
      )}
    </>
  );
}
