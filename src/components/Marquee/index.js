import styles from './marquee.module.scss';
import Image from 'next/image';
import marqueeImg from './marquee-img.svg';

const Marquee = () => (
  <div className={styles['marquee-wrapper']}>
    <div className={`container ${styles['marquee-block-wrapper']}`}>
      <div className={styles['marquee-block']}>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>SECURE</span>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>NIMBLE</span>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>TRANSPARENT</span>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>SECURE</span>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>NIMBLE</span>
        <Image src={marqueeImg} alt="marquee image" />
        <span className={styles['marquee-block__text']}>TRANSPARENT</span>
      </div>
    </div>
  </div>
);

export default Marquee;
