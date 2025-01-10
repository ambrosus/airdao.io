import { useRef, useEffect } from 'react';
import useOnScreen from '@/hooks/useOnScreen';

const useInterval = (setCurrentIndex, interval = 1700, count = 4) => {
  const sliderRef = useRef(null);
  const visible = useOnScreen(sliderRef, '10px');
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      clearInterval(intervalIdRef.current);
    };

    const handleMouseLeave = () => {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex >= count ? 0 : prevIndex + 1));
      }, interval);
    };

    if (visible) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }

    const sliderHolder = sliderRef.current;
    if (!sliderHolder) return;

    sliderHolder.addEventListener('mouseenter', handleMouseEnter);
    sliderHolder.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalIdRef.current);
      if (sliderHolder) {
        sliderHolder.removeEventListener('mouseenter', handleMouseEnter);
        sliderHolder.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, count, interval]);

  return sliderRef;
};

export default useInterval;
