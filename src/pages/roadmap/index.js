import Head from 'next/head';
import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './roadmap.module.scss';
import { useMemo, useState } from 'react';
import Expand from '@/components/Expand';
import { asText } from '@prismicio/client';
import Tab from '@/components/Tab';
import icon from './roadmap.svg';
import { formatDate } from '@/utils/formatDate';
import ArticlesList from '@/components/ArticlesList';
import * as prismic from '@prismicio/client';
import Seo from '@/components/Seo';
import { PrismicRichText } from '@prismicio/react';

const getCurrentDay = () => {
  let now = new Date();
  const d2025 = new Date('01-01-2025');
  if (now.getTime() < d2025.getTime()) {
    now = d2025;
  }
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(diff / oneDay);
};

const tabs = [
  { label: 'L1', value: 0 },
  { label: 'DeFi', value: 1 },
  { label: 'GameFi', value: 2 },
  { label: 'Governance', value: 3 },
];

const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

const RoadmapNew = ({ footerText, header, page, articles }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const activeTabData = useMemo(() => {
    const currentSlice = `slices${currentTab ? currentTab : ''}`;
    const sliceData = page.data[currentSlice];

    return sliceData;
  }, [page, currentTab]);

  return (
    <>
      <Head>
        <meta property="og:image" content="https://airdao.io/roadmap-og.png" />
        <meta name="twitter:image" content="https://airdao.io/roadmap-og.png" />
      </Head>
      <Seo
        title={page.data.meta_title}
        description={page.data.meta_description}
        image={page.data.meta_image.url}
      />
      {header && <HeaderWrapper header={header} />}
      <div className={styles.heading}>
        <div className={styles.heading__wrapper}>
          <div>
            <PrismicRichText
              field={page.data.title}
              components={{
                paragraph: ({ children }) => (
                  <h1 className={styles.title}>{children}</h1>
                ),
              }}
            />
            <PrismicRichText
              field={page.data.subtitle}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.subtitle}>{children}</p>
                ),
              }}
            />
          </div>
          <div className={styles.img_wrapper}>
            <img src={icon.src} alt="roadmap" className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        <Tab tabs={tabs} onChange={setCurrentTab} selectedTab={currentTab} />
      </div>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div
            className={styles.now}
            style={{ width: `${(getCurrentDay() * 100) / 365}%` }}
          >
            <div className={styles.now__children}>
              <div className={styles.here}>We are here</div>
            </div>
          </div>
          <p className={styles.updated}>
            Last updated:{' '}
            {page.last_publication_date &&
              formatDate(new Date(page.last_publication_date))}
          </p>
          <div className={styles.quarters}>
            <div className={styles.grid__borders}>
              {quarters.map(quarter => (
                <div key={quarter} />
              ))}
            </div>
            <div className={styles.quarters__head}>
              {quarters.map(quarter => (
                <div key={quarter} className={styles.quarter}>
                  {quarter}
                </div>
              ))}
            </div>
            <div className={styles.quarters__body}>
              {activeTabData.map(({ id, primary }, index) => (
                <div
                  key={id}
                  style={{
                    gridRowStart: index + 1,
                    gridRowEnd: index + 1,
                    gridColumnStart: Number(primary.quarter),
                    gridColumnEnd:
                      Number(primary.quarter) +
                      Number(primary.length_in_quarters),
                  }}
                >
                  <Expand
                    title={asText(primary.title)}
                    text={asText(primary.text)}
                    link={primary.link.url}
                    linkTarget={primary.link.target}
                    isDone={primary.done}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ArticlesList
        title={asText(page.data.articles_title)}
        subtitle={asText(page.data.articles_subtitle)}
        goToText="Go to blog"
        goToLink="/blog"
        articles={articles}
      />
      {footerText && <Footer data={footerText.data} />}
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const blogClient = prismic.createClient('airdao-blog');

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('roadmapnew');
  const latestBlogArticles = await blogClient.getAllByType('blog', {
    limit: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.blog_type', 'tech')],
  });
  return {
    props: { header, footerText: footer, page, articles: latestBlogArticles },
  };
}

export default RoadmapNew;
