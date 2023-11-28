import { PrismicRichText } from '@prismicio/react';
import brandStyles from '../brand.module.scss';
import LogoBlock from './Block';
import styles from './logo.module.scss';

export default function Logo({ content }) {
  return (
    <div className={brandStyles.container}>
      <div className={brandStyles.wrapper}>
        <PrismicRichText
          field={content?.logo_title}
          components={{
            paragraph: ({ children }) => (
              <h1 className={brandStyles.headerText}>{children}</h1>
            ),
          }}
        />
        <div className={styles.iconsContainer}>
          {content?.logo_item?.map((item, index) => (
            <LogoBlock
              smallIcon={item?.small_icon}
              bigIcon={item?.big_icon}
              SVGBigLink={item?.svg_link_big}
              PNGBigLink={item?.png_link_big}
              SVGSmallLink={item?.svg_link_small}
              PNGSmallLink={item?.png_link_small}
              key={index}
              isBlack={index === 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
