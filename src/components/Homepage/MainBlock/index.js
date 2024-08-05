'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-additional.svg';
import { PrismicRichText } from '@prismicio/react';
import styles from './main-block.module.scss';

const MainBlock = ({ title, description, sections }) => {
  const router = useRouter();

  return (
    <section className={styles['main-block-wrapper']}>
      <div className={`container ${styles['main-block']}`}>
        <div className={styles['main-block__title-description']}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <h1>{children}</h1>,
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => <div>{children}</div>,
            }}
          />
        </div>
        <div className={styles['main-block__additional-blocks']}>
          {sections.map(section => (
            <div
              key={section.title[0].text}
              className={styles['main-block__additional-block']}
              onClick={() => router.push(section.link.url)}
            >
              <div className={styles['main-block__additional-block-title']}>
                <PrismicRichText
                  field={section.title}
                  components={{
                    paragraph: ({ children }) => <div>{children}</div>,
                  }}
                />
                <PrismicRichText
                  field={section.description}
                  components={{
                    paragraph: ({ children }) => <div>{children}</div>,
                  }}
                />
              </div>
              <div className={styles['main-block__continue-button']}>
                <Image src={chevron} alt="Continue Button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
