import styles from './hero.module.scss';
import utilityStyles from '@/styles/utils.module.scss';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import devicesIllustration from './devices-illustration.jpg';
import circlesIllustration from './hero-circles.png';
import starsIllustration from './stars-illustration.png';
import Button from '@/components/Button';

export default function Hero({ heading, text }) {
  return (
    <section className={`${styles.hero} ${utilityStyles.container}`}>
      <Image
        src={circlesIllustration}
        alt={'circles-illustration'}
        className={styles.circles}
      />
      <Image
        src={starsIllustration}
        alt={'stars-illustration'}
        className={styles.stars}
        width={1004}
        height={445}
      />
      <div className={styles.content}>
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
        <Button
          type={'primary'}
          size={'large'}
          hasTailArrow
          className={styles.button}
        >
          Buy AMB
        </Button>
        <Image
          src={devicesIllustration}
          alt={'devices-illustration'}
          className={styles.devices}
        />
      </div>
    </section>
  );
}
