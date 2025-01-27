import styles from '../grants.module.scss';
import Link from 'next/link';
import { PrismicRichText, PrismicText } from '@prismicio/react';

const ContentBanner = ({ heading, text, email }) => {
  return (
    <div className={'container'}>
      <div className={styles.contentBanner}>
        <PrismicRichText field={heading} />
        <span className={styles.text}>
          <PrismicText field={text} />{' '}
          <Link href={`mailto:${email}`} className={styles.link}>
            {email}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ContentBanner;
