'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-additional.svg';
import { PrismicRichText } from '@prismicio/react';
import styles from './main-block.module.scss';

// TODO: blocks and links from prismic array 
const MainBlock = ({ title, description }) => {
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
          <div
            className={styles['main-block__additional-block']}
            onClick={() => router.push('/gov-portal')}
          >
            <div className={styles['main-block__additional-block-title']}>
              <div>Become a Governor</div>
              <div>Play a key role in shaping the AirDAO`s future.</div>
            </div>
            <div className={styles['main-block__continue-button']}>
              <Image src={chevron} alt="Continue Button" />
            </div>
          </div>
          <div
            className={styles['main-block__additional-block']}
            onClick={() => router.push('/ambassador')}
          >
            <div className={styles['main-block__additional-block-title']}>
              <div>Become an Ambassador</div>
              <div>Spread the word about our thriving ecosystem.</div>
            </div>
            <div className={styles['main-block__continue-button']}>
              <Image src={chevron} alt="Continue Button" />
            </div>
          </div>
          <div
            className={styles['main-block__additional-block']}
            onClick={() => router.push('/get-amb')}
          >
            <div className={styles['main-block__additional-block-title']}>
              <div>Get AMB</div>
              <div>AMB is the native token of AirDAO.</div>
            </div>
            <div className={styles['main-block__continue-button']}>
              <Image src={chevron} alt="Continue Button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
