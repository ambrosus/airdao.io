import styles from './structure.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export default function Structure({ heading, cards, text }) {
  return (
    <div className={styles.container}>
      <div className={`container`}>
        <PrismicRichText
          field={heading}
          components={{
            heading2: ({ children }) => (
              <h2 className={styles.heading}>{children}</h2>
            ),
          }}
        />
      </div>
      <div className={styles.cards}>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className={'container'}>
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.text}>{children}</p>
            ),
          }}
        />
      </div>
    </div>
  );
}

function Card({ illustration, name, description }) {
  return (
    <div className={styles.card}>
      <PrismicNextImage field={illustration} className={styles.illustration} />
      <PrismicRichText
        field={name}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.name}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        components={{
          paragraph: ({ children }) => (
            <p className={styles.description}>{children}</p>
          ),
        }}
        field={description}
      />
    </div>
  );
}
