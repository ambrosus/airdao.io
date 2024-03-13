import { useRef, useEffect } from 'react';

const useInterval = setCurrentIndex => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const handleMouseEnter = () => {
      clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
      intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex >= 4 ? 0 : prevIndex + 1));
      }, 3000);
    };

    const sliderHolder = sliderRef.current;
    sliderHolder.addEventListener('mouseenter', handleMouseEnter);
    sliderHolder.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      sliderHolder.removeEventListener('mouseenter', handleMouseEnter);
      sliderHolder.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return sliderRef;
};

export default useInterval;
