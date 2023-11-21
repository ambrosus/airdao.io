import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import styles from './events-header.module.scss';

const EventsHeader = ({ headerText, subText, buttonText }) => {
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
            <Button
              key={'button'}
              size="medium"
              type={'secondary'}
              className={styles.buttonWrapper}
              onClick={() => null}
            >
              <PrismicRichText
                field={buttonText}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles.buttonText}>{children}</p>
                  ),
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsHeader;
