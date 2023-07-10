import styles from './governance.module.scss';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

const Governance = ({
  preText,
  heading,
  text,
  actionButtonText,
  actionButtonLink,
  learnButtonText,
  learnButtonLink,
}) => (
  <section className={styles.governance}>
    <div className={styles['governance-img']}></div>
    <div className={styles.governance__wrapper}>
      <div className={styles.governance__label}>{preText}</div>
      <PrismicRichText
        field={heading}
        components={{
          heading2: ({ children }) => (
            <p className={styles.governance__title}>{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.governance__text}>{children}</p>
          ),
        }}
      />

      <PrismicNextLink
        field={actionButtonLink}
        className={styles['governance__btn-primary']}
      >
        {actionButtonText}
      </PrismicNextLink>
      <PrismicNextLink
        field={learnButtonLink}
        className={styles['governance__btn-secondary']}
      >
        {learnButtonText}
      </PrismicNextLink>
    </div>
  </section>
);

export default Governance;
