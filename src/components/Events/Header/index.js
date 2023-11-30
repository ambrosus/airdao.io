import { PrismicRichText } from '@prismicio/react';
import AddEventScript from '../Calendar/addEventScript';
import styles from './events-header.module.scss';

const EventsHeader = ({ headerText, subText, buttonText }) => {
  return (
    <>
      <AddEventScript />
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
