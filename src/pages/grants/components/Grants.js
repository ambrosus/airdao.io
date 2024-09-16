import styles from '../grants.module.scss';

import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

import CtaBg from '../cta-bg.jpg';
import Image from 'next/image';

const Grants = ({ cards, cta, email }) => {
  return (
    <div className={styles.gridBanners}>
      <div className={`container ${styles['cards-container']}`}>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={`${styles.card} ${styles[card.color]}`}>
              <PrismicNextImage
                field={card.illustration}
                className={styles.card_image}
              />
              <PrismicRichText field={card.heading} />
              <PrismicRichText field={card.description} />
            </div>
          ))}
        </div>
        <span className={styles['cta-block']}>
          <Image
            src={CtaBg}
            alt={'cta background'}
            className={styles['cta-background']}
          />
          <PrismicRichText field={cta} />{' '}
          <a href={`mailto:${email}`} className={styles.link}>
            {email}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Grants;
