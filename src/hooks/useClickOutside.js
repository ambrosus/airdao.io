import { useEffect } from 'react';

const useOutsideClick = (ref, callback, isOpen) => {
  const handleClick = (event) => {
    console.log(1);
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
};

export default useOutsideClick;
