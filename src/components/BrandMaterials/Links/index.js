import brandStyles from '../brand.module.scss';
import LinkItem from './Item';
import styles from './links.module.scss';

export default function Links({ content }) {
  return (
    <div className={brandStyles.container}>
      <div className={styles.wrapper}>
        {content?.link?.map((item, index) => (
          <LinkItem
            name={item?.title}
            buttonText={item?.button_title}
            link={item?.button_link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
