import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (event) => {
    console.log(1);
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useOutsideClick;
