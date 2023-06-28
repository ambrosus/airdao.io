import styles from './trade.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Arrow from './Arrow';

export default function CexCard({ card }) {
  const {
    primary: { name, icon },
    items,
  } = card;

  return (
    <div className={styles.cex_card}>
      <div className={styles.card_top}>
        <PrismicNextImage field={icon} className={styles.cex_icon} />
        <PrismicRichText
          field={name}
          components={{
            paragraph: ({ children }) => (
              <h3 className={styles.cex_name}>{children}</h3>
            ),
          }}
        />
      </div>
      <div className={styles.pairs}>
        {items.map((item) => (
          <PrismicNextLink
            field={item.pair_link}
            key={item.pair_name}
            className={styles.pair}
          >
            {item.pair_name}
            <Arrow className={styles.pair_arrow} />
          </PrismicNextLink>
        ))}
      </div>
    </div>
  );
}
