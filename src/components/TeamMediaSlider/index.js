import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './mediaSlider.module.scss';
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.jpg';
import slider4 from './slider4.jpg';
import slider5 from './slider5.jpg';
import slider6 from './slider6.jpg';
import slider7 from './slider7.jpg';
import slider8 from './slider8.jpg';
import slider9 from './slider9.jpg';

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
            src={slider3}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider4}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider5}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider6}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider7}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider8}
            alt="slider image"
          />
          <Image
            className={styles['media-slider-image-block']}
            src={slider9}
            alt="slider image"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMediaSlider;
