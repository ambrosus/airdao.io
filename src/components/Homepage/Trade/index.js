import styles from './trade.module.scss';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import statsMock from './stats-mock.png';
import CexCard from './CexCard';

export default function Trade({ preText, heading, text, cards }) {
  return (
    <section className={styles.trade}>
      <div className={styles.trade__preText}>{preText}</div>
      <PrismicRichText
        field={heading}
        components={{
          heading2: ({ children }) => (
            <h2 className={styles.trade__heading}>{children}</h2>
          ),
        }}
      />
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.trade__text}>{children}</p>
          ),
        }}
      />
      <Image
        src={statsMock}
        alt={'amb-stats'}
        className={styles.trade__statsMock}
      />
      <div className={styles.trade__preText}>BUY AMB HERE</div>
      <div className={styles.trade__cexCards}>
        {cards.map((card) => (
          <CexCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
}
