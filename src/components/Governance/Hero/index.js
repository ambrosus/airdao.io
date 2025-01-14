import styles from './hero.module.scss';
import Image from 'next/image';
import bg from './bg.svg';
import mobileBg from './mobile-bg.svg';
import { PrismicRichText } from '@prismicio/react';

export default function Hero({ heading }) {
  return (
    <div className={styles.container}>
      <Image
        src={bg}
        alt="background"
        className={styles.background}
        width={1439}
        height={952}
      />
      <Image
        src={mobileBg}
        alt="background"
        className={styles.background_mobile}
      />
      <PrismicRichText
        field={heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={styles.heading}>{children}</h1>
          ),
        }}
      />
    </div>
  );
}
