import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './mediaSlider.module.scss';
import slider1 from './slider1.png';
import slider2 from './slider2.png';

const TeamMediaSlider = () => {
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
    <div className={styles['media-slider-wrapper']}>
      <div className={styles['media-slider-block-wrapper']}>
        <div
          className={`${styles['media-slider-block']} ${
            isWindows ? styles['media-slider-block_win'] : ''
          }`}
        >
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider1}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider2}
            alt="slider image"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMediaSlider;
