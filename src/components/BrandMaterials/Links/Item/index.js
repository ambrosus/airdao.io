import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import styles from '../links.module.scss';

export default function LinkItem({ name, buttonText, link }) {
  return (
    <div className={styles.itemContainer}>
      <PrismicRichText
        field={name}
        components={{
          paragraph: ({ children }) => (
            <h1 className={styles.nameContainer}>{children}</h1>
          ),
        }}
      />
      <PrismicNextLink field={link} className={styles.buttonContainer}>
        <PrismicRichText
          field={buttonText}
          components={{
            paragraph: ({ children }) => (
              <h1 className={styles.buttonText}>{children}</h1>
            ),
          }}
        />
      </PrismicNextLink>
    </div>
  );
}
