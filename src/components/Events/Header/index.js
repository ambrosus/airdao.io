import { PrismicRichText } from '@prismicio/react';
import { useEffect } from 'react';
import styles from './events-header.module.scss';

const EventsHeader = ({ headerText, subText, buttonText }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.addevent.com/libs/stc/1.0.2/stc.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className={styles.headerContainer}>
        <div className="container">
          <PrismicRichText
            field={headerText}
            components={{
              paragraph: ({ children }) => (
                <p className={styles.headerTitle}>{children}</p>
              ),
            }}
          />
          <div className={styles.subtitleContainer}>
            <PrismicRichText
              field={subText}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.headerSubtitle}>{children}</p>
                ),
              }}
            />
          </div>
          <div className={styles.buttonContainer}>
            <a
              data-id="tG531829"
              href="https://www.addevent.com/calendar/tG531829"
              target="_blank"
              className={styles.buttonWrapper}
            >
              <PrismicRichText
                field={buttonText}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles.buttonText}>{children}</p>
                  ),
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsHeader;
