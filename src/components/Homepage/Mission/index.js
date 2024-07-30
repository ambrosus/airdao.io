import Marquee from 'react-fast-marquee';
import styles from './mission.module.scss';
import { Button } from '@airdao/ui-library';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

const Mission = ({
  title,
  description,
  statistics,
  buttonName,
  buttonLink,
  images,
}) => {
  return (
    <section className={styles['mission-container']}>
      <div className={`container ${styles['mission-container-column']}`}>
        <div className={styles['title']}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <h3>{children}</h3>,
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => <div>{children}</div>,
            }}
          />
        </div>
      </div>
      <div className={styles['mission-path']}>
        <Marquee autoFill className={styles['marquee']}>
          {images.map(image => (
            <img
              key={image.mission_image.url}
              src={image.mission_image.url}
              alt="community"
            />
          ))}
        </Marquee>
      </div>
      <div className={`container ${styles['mission-container-column']}`}>
        <div className={styles['statistics']}>
          {statistics.map(statistic => (
            <div key={statistic.mission_title[0].text}>
              <div>{statistic.mission_value[0].text}</div>
              <div>{statistic.mission_title[0].text}</div>
            </div>
          ))}
        </div>
        <Link href={buttonLink[0].text}>
          <PrismicRichText
            field={buttonName}
            components={{
              paragraph: ({ children }) => (
                <Button type="plain" size="large">
                  {children}
                </Button>
              ),
            }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Mission;
