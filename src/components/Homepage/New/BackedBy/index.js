import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import binance from '@/assets/img/homepage/backed-by/binance.svg';
import gradient from '@/assets/img/homepage/backed-by/gradient-marquee.svg';
import styles from './backed-by.module.scss';

// TODO: add texts from prismic
const BackedBy = () => {
  return (
    <section className={styles['backed-by-container']}>
      <div className={`container ${styles['backed-by-title']}`}>
        Backed by industry leaders in business and blockchain
      </div>
      <div className={styles['backed-by-path']}>
        <Image src={gradient} className={styles['gradient']} alt="gradient" />
        <Marquee autoFill className={styles['marquee']}>
          <Image src={binance} alt="binance" />
        </Marquee>
        <Image
          src={gradient}
          className={styles['gradient-rotate']}
          alt="gradient"
        />
      </div>
      <div className={styles['backed-by']}>
        <Image src={binance} alt="binance" />
        <Image src={binance} alt="binance" />
        <Image src={binance} alt="binance" />
        <Image src={binance} alt="binance" />
      </div>
    </section>
  );
};

export default BackedBy;
