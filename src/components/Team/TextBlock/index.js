import BlockLabel from '@/components/BlockLabel';
import TeamMediaSlider from '@/components/TeamMediaSlider';
import { PrismicRichText } from '@prismicio/react';
import styles from './text-block.module.scss';

export default function TextBlock({ story, illustration, mission, vision }) {
  return (
    <div className={`${styles.container}`}>
      <div className="container">
        <div className={styles.block}>
          <BlockLabel className={`${styles.label} ${styles.label_first}`}>
            OUR STORY
          </BlockLabel>
          <PrismicTextWrapper prismicText={story} />
        </div>
      </div>
      <div className={styles.slider}>
        <TeamMediaSlider />
      </div>
      <div className="container">
        <div className={`${styles.block} ${styles.mission}`}>
          <BlockLabel className={styles.label}>OUR MISSION</BlockLabel>
          <PrismicTextWrapper prismicText={mission} />
        </div>
        <div className={styles.block}>
          <BlockLabel className={styles.label}>OUR VISION</BlockLabel>
          <PrismicTextWrapper prismicText={vision} />
        </div>
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
