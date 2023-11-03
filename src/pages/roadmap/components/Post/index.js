import {useState} from 'react';
import styles from './post.module.scss';
import {PrismicRichText} from '@prismicio/react';
import Image from 'next/image';
import chevron from './chevron.svg';
import {asText} from '@prismicio/client';

const Post = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => setExpanded((state) => !state);

  return (
    <div className={`${styles.post} ${expanded ? styles.post_expanded : ''} ${data.upcoming ? styles.post_upcoming : ''}`}>
      <div className={`${styles.heading} ${!asText(data.content) ? styles.heading_empty : ''} ${data.upcoming ? styles.heading_upcoming : ''}`} onClick={handleExpanded}>
        {data.upcoming && (
          <span className={styles.upcoming}>Upcoming</span>
        )}
        <PrismicRichText
          field={data.title}
          components={{
            paragraph: ({ children }) => (
              <p className={styles.title}>{children}</p>
            ),
          }}
        />
        {asText(data.content) && (
          <button type="button" className={styles.chevron}>
            <Image src={chevron} alt="chevron" />
          </button>
        )}
      </div>
      <PrismicRichText
        field={data.content}
        components={{
          paragraph: ({ children }) => (
            <p className={styles.content}>{children}</p>
          ),
        }}
      />
    </div>
  )
};

export default Post;
