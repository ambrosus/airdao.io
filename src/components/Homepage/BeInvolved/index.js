import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import burnImage from '@/assets/img/homepage/be-involved/burn.svg';
import gradient from '@/assets/img/homepage/ambassadors-marquee-gradient.svg';
import styles from './be-involved.module.scss';
import { PrismicRichText } from '@prismicio/react';
import Marquee from 'react-fast-marquee';

const BeInvolved = ({
  smallTitle,
  title,
  main,
  socials,
  sbt,
  events,
  ambassador,
  burn,
  ambassadors,
}) => {
  const ambassadorsMap = ambassadors.map(ambassador => (
    <img key={ambassador.ambassador_image.url} src={ambassador.ambassador_image.url} alt="Ambassador" />
  ));

  return (
    <section className={styles['be-involved-container']}>
      <div className="container">
        <div className={styles['title']}>
          <PrismicRichText
            field={smallTitle}
            components={{
              paragraph: ({ children }) => <div>{children}</div>,
            }}
          />
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <h2>{children}</h2>,
            }}
          />
        </div>
        <div className={styles['blocks']}>
          <div>
            <div className={styles['block-title-description']}>
              <h3>{main[0].involved_main_title[0].text}</h3>
              <div>{main[0].involved_main_description[0].text}</div>
            </div>
            <div className={styles['socials']}>
              {socials.map(social => (
                <a
                  href={social.social_link.url}
                  key={social.social_icon.url}
                  target="_blank"
                >
                  <Image
                    src={social.social_icon.url}
                    width={32}
                    height={32}
                    alt="social"
                  />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div>
              <img
                src={sbt[0].sbt_image.url}
                alt="governor"
                className={styles['desktop-governor']}
              />
              <img
                src={sbt[0].sbt_image.url}
                alt="governor"
                className={styles['mobile-governor']}
              />
              <div className={styles['block-title-description']}>
                <h3>{sbt[0].sbt_title[0].text}</h3>
                <div>{sbt[0].sbt_description[0].text}</div>
                <Link href={sbt[0].sbt_button_link.url}>
                  <Button
                    type="tetiary"
                    size="large"
                    className={styles['button']}
                  >
                    {sbt[0].sbt_button_name[0].text}
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className={styles['block-title-description']}>
                {events[0].events_image?.url && (
                  <img
                    src={events[0].events_image.url}
                    alt="events"
                    className={styles['events-image']}
                  />
                )}
                <div className={styles['event-item']}>
                  <div>
                    <img
                      src={events[0].event_item_icon.url}
                      alt="event"
                      className={styles['event-icon']}
                    />
                    <div className={styles['event-item-title-date-description']}>
                      <div className={styles['event-item-title-date']}>
                        <div className={styles['event-item-title']}>
                          {events[0].event_item_title[0].text}
                        </div>
                        <div className={styles['event-item-date']}>
                          {events[0].event_item_date[0].text}
                        </div>
                      </div>
                      <div className={styles['event-item-description']}>
                        {events[0].event_item_description[0].text}
                      </div>
                    </div>
                  </div>
                </div>
                <h3>{events[0].events_title[0].text}</h3>
                <div>{events[0].events_description[0].text}</div>
                <Link href={events[0].events_button_link.url}>
                  <Button
                    type="tetiary"
                    size="large"
                    className={styles['button']}
                  >
                    {events[0].events_button_name[0].text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                padding: '32px 0',
              }}
            >
              <div
                className={styles['block-title-description']}
                style={{ height: '100%' }}
              >
                <div className={styles['marquee-container']}>
                  <Marquee className={styles['marquee']} autoFill>
                    {ambassadorsMap}
                  </Marquee>
                  <Image
                    className={styles['gradient']}
                    src={gradient}
                    alt="gradient"
                  />
                </div>
                <div
                  className={styles['block-title-description']}
                  style={{
                    padding: '0 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3>{ambassador[0].ambassador_title[0].text}</h3>
                  <div>{ambassador[0].ambassador_description[0].text}</div>
                  <Link href={ambassador[0].ambassador_button_link.url}>
                    <Button
                      type="tetiary"
                      size="large"
                      className={styles['button']}
                    >
                      {ambassador[0].ambassador_button_name[0].text}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles['block-burn']}>
              <Image src={burnImage} alt="burn" />
              <div
                className={styles['block-title-description']}
                style={{ marginTop: '37.5px' }}
              >
                <h3>{burn[0].burn_title[0].text}</h3>
                <div>{burn[0].burn_description[0].text}</div>
                <a href={burn[0].burn_button_link.url} target="_blank">
                  <Button type="plain" size="large">
                    {burn[0].burn_button_name[0].text}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeInvolved;
