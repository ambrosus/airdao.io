import { PrismicRichText } from '@prismicio/react';
import styles from './policy.module.scss';

export default function PolicyPage({ page }) {
  return (
    <section className={`container ${styles.container}`}>
      <PrismicRichText field={page.data.content} />
    </section>
  );
}
