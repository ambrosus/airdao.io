import { useEffect } from 'react';

const useOutsideClick = (ref, callback, isOpen) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClick);
      }, 0);
    }
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
};

export default useOutsideClick;
