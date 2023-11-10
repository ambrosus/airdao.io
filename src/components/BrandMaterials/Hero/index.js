import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import bg from './bg.svg';
import styles from './hero.module.scss';
import mobileBg from './mobile-small-bg.svg';

export default function Hero({ heading }) {
  return (
    <div className={styles.container}>
      <Image src={bg} alt={'background'} className={styles.background} />
      <Image
        src={mobileBg}
        alt={'background'}
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
