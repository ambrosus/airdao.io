import { PrismicRichText } from '@prismicio/react';
import brandStyles from '../brand.module.scss';
import ColorsBlock from './Block';
import styles from './colors.module.scss';

export default function Colors({ content }) {
  return (
    <div className={brandStyles.container}>
      <div className={brandStyles.wrapper}>
        <PrismicRichText
          field={content?.colors_title}
          components={{
            paragraph: ({ children }) => (
              <h1 className={brandStyles.headerText}>{children}</h1>
            ),
          }}
        />
        <div className={styles.iconsContainer}>
          {content?.colors_item?.map((item, index) => (
            <ColorsBlock
              icon={item?.icon}
              fontName={item?.title}
              fonts={[item?.left_color, item?.right_color]}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
