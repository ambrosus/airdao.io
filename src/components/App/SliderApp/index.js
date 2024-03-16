import { useState } from 'react';

import Slider from './slider';
import slides from './slides';
import styles from './slider.module.scss';
import { splitArray } from '@/utils';
import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
// import useMobileDetect from '@/hooks/useMobileDetect';

const [leftHalf, rightHalf] = splitArray(slides);

const SliderApp = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useCheckMobileScreen();

  const handleSlideClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <h4>{title}</h4>
      {isMobile ? (
        <Slider.Thumbs thumbs={slides} />
      ) : (
        <Slider setCurrentIndex={setCurrentIndex}>
          <Slider.Thumbs
            thumbs={leftHalf}
            onEvent={handleSlideClick}
            className={styles.thumbsLeft}
            currentIndex={currentIndex}
          />
          <Slider.Slides slides={slides} currentIndex={currentIndex} />
          <Slider.Thumbs
            thumbs={rightHalf}
            onEvent={handleSlideClick}
            className={styles.thumbsRight}
            currentIndex={currentIndex}
          />
        </Slider>
      )}
    </div>
  );
};

export default SliderApp;
