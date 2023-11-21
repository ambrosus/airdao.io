import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import styles from '../colors.module.scss';

export default function ColorsBlock({ icon, fontName, fonts = [] }) {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.block}>
        <div className={styles.blockContent}>
          <PrismicNextImage field={icon} fill alt="" className={styles.image} />
        </div>
        <div className={styles.blockButtons}>
          <PrismicRichText
            field={fontName}
            components={{
              paragraph: ({ children }) => (
                <h1 className={styles.fontName}>{children}</h1>
              ),
            }}
          />
          <div className={styles.fonts}>
            {fonts?.map((font, index) => (
              <div key={index}>
                <PrismicRichText
                  field={font}
                  components={{
                    paragraph: ({ children }) => (
                      <h1 className={styles.fontText}>{children}</h1>
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
