import styles from './roles.module.scss';
import img from './infl.svg';
import Image from 'next/image';
import {Button} from '@airdao/ui-library';

const Roles = () => (
  <div className={styles.roles}>
    <div className="container">
      <p className={styles.roles__title}>
        Are you ready to take your passion for AirDAO to the next level?
      </p>
      <div className={styles.roles__list}>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
        <div className={styles.roles__item}>
          <Image src={img} alt="role" />
          <p className={styles['roles__item-title']}>Influencers & partners</p>
          <p className={styles['roles__item-text']}>Grow our community and brand, and get involved in our governance.</p>
        </div>
      </div>
      <p className={styles.roles__subtext}>
        Our ambassador program is open to all, and you can participate in endless ways. Whether by engaging your online and local communities or creating captivating content, everyone has an opportunity to make an impact.
      </p>
      <Button type="secondary" size="large">
        Become an Ambassador
      </Button>
    </div>
  </div>
);

export default Roles;
