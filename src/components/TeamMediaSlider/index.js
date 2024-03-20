import { useEffect, useState } from 'react';
import styles from './mediaSlider.module.scss';

const TeamMediaSlider = ({ sliderImgs }) => {
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
          {sliderImgs.map((el) => (
            <img
              key={el.img.url}
              className={styles['media-slider-image-block']}
              src={el.img.url}
              alt="slider image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMediaSlider;
