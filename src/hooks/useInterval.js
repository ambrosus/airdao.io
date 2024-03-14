import { useRef, useEffect } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

const useInterval = (setCurrentIndex, interval = 1700, count = 4) => {
  const sliderRef = useRef(null);
  const visible = useOnScreen(sliderRef, '10px');

  useEffect(() => {
    let intervalId;

    const handleMouseEnter = () => {
      clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
      intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex >= count ? 0 : prevIndex + 1));
      }, interval);
    };

    console.log('visible', visible);

    if (visible) {
      handleMouseLeave();
    } else {
      handleMouseEnter;
    }

    const sliderHolder = sliderRef.current;
    sliderHolder.addEventListener('mouseenter', handleMouseEnter);
    sliderHolder.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      sliderHolder.removeEventListener('mouseenter', handleMouseEnter);
      sliderHolder.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  return sliderRef;
};

export default useInterval;
