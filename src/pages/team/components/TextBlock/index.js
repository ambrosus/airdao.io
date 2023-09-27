import styles from './text-block.module.scss';
import BlockLabel from '@/components/BlockLabel';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export default function TextBlock({ story, illustration, mission, vision }) {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.block}>
        <BlockLabel>OUR STORY</BlockLabel>
        <PrismicTextWrapper prismicText={story} />
      </div>

      <PrismicNextImage field={illustration} className={styles.illustration} />

      <div className={styles.block}>
        <BlockLabel>OUR MISSION</BlockLabel>
        <PrismicTextWrapper prismicText={mission} />
      </div>
      <div className={styles.block}>
        <BlockLabel>OUR VISION</BlockLabel>
        <PrismicTextWrapper prismicText={vision} />
      </div>
    </div>
  );
}

function PrismicTextWrapper({ prismicText }) {
  return (
    <div className={styles.text}>
      <PrismicRichText
        field={prismicText}
        components={{
          heading2: ({ children }) => (
            <h2 className={styles.heading}>{children}</h2>
          ),
          paragraph: ({ children }) => (
            <p className={styles.paragraph}>{children}</p>
          ),
        }}
      />
    </div>
  );
}
