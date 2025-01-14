import { useEffect, useState } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);
  return isVisible;
}
