import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './slider.module.scss';
import useInterval from '@/hooks/useInterval';

const Slide = ({ slide }) => (
  <div className={styles.slide}>
    <Image
      width={282}
      height={608}
      src={slide.src}
      alt={slide.title}
      quality={100}
    />
  </div>
);

const Thumbs = ({ thumbs, onEvent, className = '', currentIndex = '' }) => {
  return (
    <ul className={`${styles.thumbs} ${className}`}>
      {thumbs.map(slide => (
        <li
          key={slide.id}
          className={`${styles.thumbItem} ${styles[`item-${slide.id}`]} ${
            currentIndex === slide.id ? styles.active : ''
          }`}
          onMouseEnter={() => onEvent && onEvent(slide.id)}
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
};

const Slides = ({ slides, currentIndex }) => {
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
            {slides.map(slide => (
              <Slide key={slide.id} slide={slide} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ children, setCurrentIndex }) => {
  const sliderRef = useInterval(setCurrentIndex);

  return (
    <div className={styles.sliderHolder} ref={sliderRef}>
      {children}
    </div>
  );
};

Slider.Thumbs = Thumbs;
Slider.Slides = Slides;

export default Slider;
