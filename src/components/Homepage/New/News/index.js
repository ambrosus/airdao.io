import Link from 'next/link';
import Image from 'next/image';
import newsIcon from '@/assets/icons/news.svg';
import chevron from '@/assets/icons/chevron-blue.svg';
import styles from './news.module.scss';
import { PrismicRichText } from '@prismicio/react';

// TODO: add texts from prismic
const News = ({ news }) => {
  console.log('news', news);

  if (!news.length) return null;

  return (
    <section className="container">
      <div className={styles['news-container']}>
        <div className={styles['title']}>
          <div>
            <Image src={newsIcon} alt="News" />
            News
          </div>
          <Link href="#">
            All News
            <Image src={chevron} alt="Continue button" />
          </Link>
        </div>
        <div className={styles['news-list']}>
          {news.map(newItem => (
            <div key={newItem.uid} className={styles['news-item']}>
              <Image
                src={newItem.data.article_link_img.url}
                width={417}
                height={300}
                alt=""
              />
              <PrismicRichText
                field={newItem.description}
                components={{
                  paragraph: ({ children }) => (
                    <div className={styles['news-title']}>{children}</div>
                  ),
                }}
              />
              <div className={styles['news-date']}>03 January 2024</div>
              <div className={styles['news-title']}>
                Lorem ipsum dolor sit amet consectetur. Ac massa et eget lectus at.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
