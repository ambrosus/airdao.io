import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (event) => {
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
  }, []);
};

export default useOutsideClick;
