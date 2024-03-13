import Slider from './slider';

import styles from './slider.module.scss';

const SliderApp = ({ title }) => {
  return (
    <div className={styles.sliderContainer}>
      <h4>{title}</h4>
      <Slider />
    </div>
  );
};

export default SliderApp;
