import { useEffect } from 'react';

const AddEventScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.addevent.com/libs/cal/js/cal.embed.t1.init.js';
    script.className = 'ae-emd-script';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AddEventScript;
