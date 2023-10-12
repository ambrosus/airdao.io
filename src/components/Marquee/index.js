import styles from './marquee.module.scss';
import Image from 'next/image';
import marqueeImg from './marquee-img.svg';
import { useEffect, useState } from 'react';

const Marquee = () => {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (!('navigator' in window)) {
      return 'unknown';
    }
    const platform = (
      navigator.userAgentData?.platform || navigator.platform
    )?.toLowerCase();
    setIsWindows(platform.startsWith('win'));
  }, []);

  return (
    <div className={styles['marquee-wrapper']}>
      <div className={styles['marquee-block-wrapper']}>
        <div
          className={`${styles['marquee-block']} ${
            isWindows ? styles['marquee-block_win'] : ''
          }`}
        >
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
};

export default Marquee;
