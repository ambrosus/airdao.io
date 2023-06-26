import styles from './hero.module.scss';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import devicesIllustration from './devices-illustration.png';

export default function Hero({ heading, text }) {
  return (
    <section className={styles.hero}>
      <PrismicRichText
        field={heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={styles.hero__heading}>{children}</h1>
          ),
        }}
      />
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.hero__text}>{children}</p>
          ),
        }}
      />
      <a className={styles.hero__button} href={'google.com'}>
        Buy AMB
      </a>
      <Image src={devicesIllustration} alt={'devices-illustration'} />
    </section>
  );
}
