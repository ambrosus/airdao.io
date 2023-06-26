import styles from './banner.module.scss';
import { PrismicRichText } from '@prismicio/react';

export default function Banner({ data }) {
  return (
    <section className={styles.banner}>
      <PrismicRichText field={data} />
    </section>
  );
}
