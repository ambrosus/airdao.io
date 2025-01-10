'use client';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-grey.svg';
import styles from './rba.module.scss';
import { useRouter } from 'next/router';
import { PrismicRichText } from '@prismicio/react';

const RoadmapBlogAcademy = ({ list }) => {
  const router = useRouter();

  return (
    <section className={styles['roadmap-blog-academy']}>
      <div className="container">
        <div className={styles['rba-container']}>
          {list.map(item => (
            <div
              key={item.page_title[0].text}
              className={styles['rba-item']}
              onClick={() => router.push(item.page_link.url)}
            >
              <Image
                src={item.page_icon.url}
                alt={item?.page_title[0].text || 'Roadmap Blog Academy'}
                width={90}
                height={56}
              />
              <div className={styles['title-description']}>
                <PrismicRichText
                  field={item.page_title}
                  components={{
                    paragraph: ({ children }) => <div>{children}</div>,
                  }}
                />
                <PrismicRichText
                  field={item.page_description}
                  components={{
                    paragraph: ({ children }) => <div>{children}</div>,
                  }}
                />
              </div>
              <Image src={chevron} alt="Continue button" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapBlogAcademy;
