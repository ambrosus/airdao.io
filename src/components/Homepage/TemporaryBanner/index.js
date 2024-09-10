import styles from './temp-banner.module.scss';
import sfIcon from './starfleet.svg';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-additional.svg';
import { Button } from '@airdao/ui-library';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const targetDate = '2024-09-15';

const TemporaryBanner = () => {
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    const calculateRemainingDays = () => {
      const currentDate = new Date();
      const target = new Date(targetDate);
      const timeDiff = target - currentDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setRemainingDays(daysDiff);
    };

    calculateRemainingDays();
  }, [targetDate]);

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.day}>{remainingDays}</span>
          <span className={styles.day_text}>days left</span>
        </div>
        <div className={styles.right}>
          <img src={sfIcon.src} alt="starfleet" />
          <p className={styles.text}><span>Final warning!</span> Stakers must be aboard the ship</p>
          <Link href="https://star-fleet.io/staking" target="_blank">
            <Button type="primary" size="large" className={styles.btn}>
              Learn more
              <Image src={chevron} alt="Continue Button" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default TemporaryBanner;
