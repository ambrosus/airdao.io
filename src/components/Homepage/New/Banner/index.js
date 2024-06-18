import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@airdao/ui-library';
import rocket from '@/assets/img/homepage/rocket.svg';
import styles from './banner-rocket.module.scss';

// TODO: add texts from prismic
const BannerRocket = () => {
  return (
    <section className="container">
      <div className={styles['banner-rocket-container']}>
        <Image src={rocket} alt="rocket" />
        <div className={styles['banner-text-button']}>
          <div className={styles['banner-text']}>Starfleet is the new era for our ecosystem</div>
          <Link href="#">
            <Button type="primary" size="large" className={styles['button']}>
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerRocket;
