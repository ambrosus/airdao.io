import styles from '@/components/Footer/footer.module.scss';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import contactImg from './contact-img.svg';

const Events = () => (
  <div className={styles['footer-app']}>
    <div className={styles['footer-app__info']}>
      <p className={styles['footer-app__title']}>We’d love to hear from you</p>
      <p className={styles['footer-app__text']}>
        Get in touch if you have feedback or need help.
      </p>
      <Button className={styles['footer-app__btn']} type="tetiary" size="large">
        Contact us
      </Button>
    </div>
    <Image src={contactImg} alt="events" />
  </div>
);

export default Events;