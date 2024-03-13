import { createClient } from '@/prismicio';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/Header';
import styles from './roadmap-new.module.scss';
import { useMemo, useState } from 'react';
import Expand from '@/components/Expand';
import { asText } from '@prismicio/client';
import Tab from '@/components/Tab';
import icon from './roadmap.svg';
import { formatDate } from '@/utils/formatDate';
import ArticlesList from '@/components/ArticlesList';
import * as prismic from '@prismicio/client';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
};

const getCurrentDay = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const tabs = [
  {label: 'Layer1', value: 0},
  {label: 'DeFi', value: 1},
  {label: 'Mobile App', value: 2},
  {label: 'Governance', value: 3},
  {label: 'Others', value: 4},
];

const RoadmapNew = ({footerText, header, page, articles}) => {
  const [currentTab, setCurrentTab] = useState(0);

  const currentTabData = useMemo(() => {
    const data = [
      { name: 'Q1', items: [] },
      { name: 'Q2', items: [] },
      { name: 'Q3', items: [] },
      { name: 'Q4', items: [] },
    ];
    const currentSlices = `slices${currentTab ? currentTab : ''}`;
    page.data[currentSlices].forEach((el) => {
      data[+el.primary.quarter - 1].items.push(el.primary);
    });
    return data;
  }, [page, currentTab]);

  const getTopOffset = (index) => {
    return (
      currentTabData
        .slice(0, index)
        .reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.items.length,
          0,
        ) * 104
    );
  };
  console.log(page);
  return (
    <>
      {header && <HeaderWrapper header={header} />}
      <div className={styles.heading}>
        <div className={styles.heading__wrapper}>
          <div>
            <h1 className={styles.title}>2024 roadmap</h1>
            <p className={styles.subtitle}>
              Our product roadmap shows what’s coming to the AirDAO ecosystem in 2024. We’ll update the chart monthly to
              reflect delivered products, new additions, and more.
            </p>
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
          <div className={styles.now} style={{ width: `${getCurrentDay() * 100 / 365}%` }}>
            <div className={styles.now__children}>
              <div className={styles.here}>
                We are here
              </div>
            </div>
          </div>
          <p className={styles.updated}>
            Last updated:{' '}
            {page.last_publication_date && formatDate(new Date(page.last_publication_date))}
          </p>
          {currentTabData.map((el, i) => (
            <div key={el.name} className={styles.item}>
              <span className={styles.quarter}>{el.name}</span>
              <div style={{ marginTop: getTopOffset(i) }} className={styles.wrapper}>
                {el.items.map((el) => (
                  <Expand key={el.id} title={asText(el.title)} text={asText(el.text)} link={el.link.url}
                          linkTarget={el.link.target} />
                ))}
              </div>
            </div>
          ))}
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

export async function getStaticProps({ params, previewData }) {
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
