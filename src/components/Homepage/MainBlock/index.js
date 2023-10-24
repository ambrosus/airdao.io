import styles from './main-block.module.scss';
import BlockLabel from '@/components/BlockLabel';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import shape from './shape.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBlock = ({ title, label, partners, subtitle }) => (
  <section className={`container ${styles['main-block']}`}>
    <PrismicRichText
      field={title}
      components={{
        paragraph: ({ children }) => (
          <h1 className={styles['main-block__title']}>{children}</h1>
        ),
      }}
    />
    <PrismicRichText
      field={subtitle}
      components={{
        paragraph: ({ children }) => (
          <p className={styles['main-block__subtitle']}>{children}</p>
        ),
      }}
    />
    <PrismicRichText
      field={label}
      components={{
        paragraph: ({ children }) => (
          <BlockLabel className={styles['main-block__label']}>
            {children}
          </BlockLabel>
        ),
      }}
    />
    <div className={styles['main-block__partners-wrapper']}>
      <div className={styles['main-block__partners']}>
        {partners.map((el) => (
          <img
            className={styles['main-block__partner']}
            width={52}
            height={52}
            key={el.partner.url}
            src={el.partner.url}
            alt="partner"
          />
        ))}
        {partners.map((el) => (
          <img
            className={styles['main-block__partner']}
            width={52}
            height={52}
            key={el.partner.url}
            src={el.partner.url}
            alt="partner"
          />
        ))}
      </div>
    </div>
  </section>
);

export default MainBlock;
