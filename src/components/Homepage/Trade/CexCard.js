import styles from './trade.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export default function CexCard({ card }) {
  const {
    primary: { name, icon },
    items,
  } = card;

  return (
    <div className={styles.trade__cexCard}>
      <div className={styles.trade__cardTop}>
        <PrismicNextImage field={icon} className={styles.trade__cexIcon} />
        <PrismicRichText
          field={name}
          components={{
            paragraph: ({ children }) => (
              <h3 className={styles.trade__cexName}>{children}</h3>
            ),
          }}
        />
      </div>
      <div className={styles.pairs}>
        {items.map((item) => (
          <PrismicNextLink
            field={item.link}
            key={item.name}
            className={styles.pair}
          >
            {item.name}
          </PrismicNextLink>
        ))}
      </div>
    </div>
  );
}
