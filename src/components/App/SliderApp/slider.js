import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import data from './data';
import { splitArray } from '@/utils';

import styles from './slider.module.scss';
import useInterval from '@/hooks/useInterval';

const Slide = ({ slide }) => (
  <div className={styles.slide}>
    <Image width={282} height={608} src={slide.src} alt={slide.title} />
  </div>
);

const [leftHalf, rightHalf] = splitArray(data);
const slides = data.map(slide => <Slide key={slide.id} slide={slide} />);

const Thumbs = ({ thumbs, onEvent, className, currentIndex }) => (
  <ul className={`${styles.thumbs} ${className}`}>
    {thumbs.map(slide => (
      <li
        key={slide.id}
        className={`${styles.thumbItem} ${
          currentIndex === slide.id ? styles.active : ''
        }`}
        onMouseEnter={() => onEvent(slide.id)}
      >
        <div className={styles.content}>
          <span className={styles.icon}>{slide.icon}</span>
          <h6>{slide.title}</h6>
          <p>{slide.desc}</p>
        </div>
      </li>
    ))}
  </ul>
);

const Slides = ({ currentIndex }) => {
  const constraintsRef = useRef(null);
  const width = constraintsRef.current && constraintsRef.current.offsetWidth;

  return (
    <div className={styles.border}>
      <div className={styles.overflow}>
        <div className={styles.carouselImages} ref={constraintsRef}>
          <motion.div
            className={styles.swiper}
            drag="x"
            animate={{
              transition: { type: 'spring', stiffness: 300, damping: 30 },
              x: -1 * currentIndex * width,
            }}
          >
            {slides}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useInterval(setCurrentIndex);

  const handleSlideClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderHolder} ref={sliderRef}>
      <Thumbs
        thumbs={leftHalf}
        onEvent={handleSlideClick}
        className={styles.thumbsLeft}
        currentIndex={currentIndex}
      />
      <Slides currentIndex={currentIndex} />
      <Thumbs
        thumbs={rightHalf}
        onEvent={handleSlideClick}
        className={styles.thumbsRight}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Slider;
