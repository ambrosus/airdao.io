import brandStyles from '../brand.module.scss';
import LinkItem from './Item';
import styles from './links.module.scss';

export default function Links({ heading, text }) {
  return (
    <div className={brandStyles.container}>
      <div className={styles.wrapper}>
        <LinkItem name="Guidelines" buttonText="Read" />
        <LinkItem name="Brand assets" buttonText="Download" />
        <LinkItem name="Product images" buttonText="Download" />
      </div>
    </div>
  );
}
