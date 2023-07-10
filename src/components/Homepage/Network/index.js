import network from './network.svg';
import Image from 'next/image';
import styles from './Network.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

const Network = ({ preText, heading, text, order, buttonText, buttonLink }) => (
  <section className={styles.network}>
    <div className={styles.network__label}>{preText}</div>
    <div className={styles['network__text-wrapper']}>
      <span className={styles['network__text-wrapper-left']}>
        <PrismicRichText
          field={heading}
          components={{
            heading2: ({ children }) => (
              <h2 className={styles['network__text-left-first']}>{children}</h2>
            ),
            strong: ({ children }) => (
              <span className={styles['network__text-left-second']}>
                {children}
              </span>
            ),
          }}
        />
      </span>
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <span className={styles['network__text-wrapper-right']}>
              {children}
            </span>
          ),
        }}
      />
    </div>
    <Image src={network} alt="network" className={styles.network__img} />
    <div className={styles.network__info}>
      {order.map(({ stat_name }, i) => (
        <div className={styles['network__info-item']} key={stat_name + i}>
          <p className={styles['network__info-primary']}>
            {statsDict[stat_name]}
          </p>
          <p className={styles['network__info-secondary']}>{stat_name}</p>
        </div>
      ))}
    </div>
    <PrismicNextLink className={styles.network__btn} field={buttonLink}>
      {buttonText}
    </PrismicNextLink>
  </section>
);

const statsDict = {
  'Total Supply': '6.3b',
  'Total Transactions': '68m',
  'Market Cap': '$86m',
  Nodes: '509',
  Holders: '20k+',
};

export default Network;
