import styles from './expand.module.scss';
import { useState } from 'react';
import chevron from '@/assets/icons/expand.svg';
import Link from 'next/link';

const Expand = ({ title, text, link, linkTarget = '', isDone = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expand}>
      <p className={styles.title}>
        {title}
        {isDone && <span className={styles.done}>Done</span>}
        {Boolean(text) && (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <img
              src={chevron.src}
              alt="open"
              className={isExpanded ? styles.rotate : ''}
            />
          </button>
        )}
      </p>
      <div
        className={`${styles.content} ${
          isExpanded ? styles.content_expand : ''
        }`}
      >
        <p className={styles.text}>{text}</p>
        {link && (
          <Link href={link} target={linkTarget} className={styles.link}>
            Learn more
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.67021 4.20694C8.97013 3.92125 9.44487 3.93279 9.73056 4.23271L14.7319 9.48318C15.0078 9.77285 15.0078 10.2281 14.7319 10.5178L9.73056 15.7682C9.44487 16.0681 8.97013 16.0797 8.67021 15.794C8.37029 15.5083 8.35875 15.0336 8.64444 14.7336L13.153 10.0005L8.64444 5.26729C8.35875 4.96737 8.37029 4.49264 8.67021 4.20694Z"
                fill="#3668DD"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Expand;
