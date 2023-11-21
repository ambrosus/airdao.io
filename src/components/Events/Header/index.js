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
          <PrismicRichText
            field={subText}
            components={{
              paragraph: ({ children }) => (
                <p className={styles.headerSubtitle}>{children}</p>
              ),
            }}
          />
          <div className={styles.buttonContainer}>
            <Button
              key={'button'}
              size="medium"
              className={styles.buttonWrapper}
              onClick={() => null}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsHeader;
