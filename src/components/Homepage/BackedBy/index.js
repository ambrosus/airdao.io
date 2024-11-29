import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { PrismicRichText } from '@prismicio/react';
import gradient from '@/assets/img/homepage/backed-by/gradient-marquee.svg';
import styles from './backed-by.module.scss';

const BackedBy = ({ title, logos }) => {
  const logoMap = logos.map(logo => (
    <img
      key={logo.logo.url}
      src={logo.logo.url}
      alt={logo?.logo.alt || 'logo'}
    />
  ));

  return (
    <section className={styles['backed-by-container']}>
      <PrismicRichText
        field={title}
        components={{
          paragraph: ({ children }) => (
            <div className={`container ${styles['backed-by-title']}`}>
              {children}
            </div>
          ),
        }}
      />
      <div className={styles['backed-by-path']}>
        <Image src={gradient} className={styles['gradient']} alt="gradient" />
        <Marquee className={styles['marquee']} autoFill>
          {logoMap}
        </Marquee>
        <Image
          src={gradient}
          className={styles['gradient-rotate']}
          alt="gradient"
        />
      </div>
    </section>
  );
};

export default BackedBy;
