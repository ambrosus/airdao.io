'use client';
import Link from 'next/link';
import Image from 'next/image';
import eventsIcon from '@/assets/icons/events.svg';
import chevron from '@/assets/icons/chevron-blue.svg';
import styles from '../News/news.module.scss';
import { PrismicRichText } from '@prismicio/react';
// import { formatDate } from '@/utils/formatDate';
import { useRouter } from 'next/router';

const Events = ({ events }) => {
  const router = useRouter();
  if (!events.length) return null;

  return (
    <section className="container">
      <div className={styles['news-container']}>
        <div className={styles['title']}>
          <div>
            <Image src={eventsIcon} alt="Events" />
            Events
          </div>
          <Link href="/blog#events">
            All Events
            <Image src={chevron} alt="Continue button" />
          </Link>
        </div>
        <div className={styles['news-list']}>
          {events.map(newItem => (
            <div
              key={newItem.uid}
              className={styles['news-item']}
              onClick={() => router.push(`/blog/${newItem.uid}`)}
            >
              <Image
                src={newItem.data.article_link_img.url}
                width={417}
                height={300}
                alt="Event image"
              />
              {/* <div className={styles['news-date']}>
                {formatDate(new Date(newItem.first_publication_date), true)}
              </div> */}
              <PrismicRichText
                field={newItem.data.title}
                components={{
                  paragraph: ({ children }) => (
                    <div className={styles['events-title']}>{children}</div>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
