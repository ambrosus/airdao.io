import Image from 'next/image';
import eventsImage from './eventsImg.svg';
import { Button } from '@airdao/ui-library';
import styles from '../../footer.module.scss';

const Events = () => (
  <div className={styles['footer-app']}>
    <div className={styles['footer-app__info']}>
      <p className={styles['footer-app__title']}>
        Add AirDAO’s events to your calendar
      </p>
      <p className={styles['footer-app__text']}>
        Add our calendar to know about all Town Halls, AirSpaces, AMAs and much
        more
      </p>
      <a
        href="https://calendar.google.com/calendar/u/0?cid=Y2FsZW5kYXJAYWlyZGFvLmlv"
        target="_blank"
        rel="nofollow"
        className={styles['footer-app__btn']}
      >
        <Button type="tetiary" size="large">
          Add to Calendar
        </Button>
      </a>
    </div>
    <Image
      src={eventsImage}
      alt="events"
      className={styles['footer-app__img']}
    />
  </div>
);

export default Events;
