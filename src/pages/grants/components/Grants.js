import styles from '../grants.module.scss';

import Image from 'next/image';

const images = [
  '/img/grants/img-1.png',
  '/img/grants/img-2.png',
  '/img/grants/img-3.png',
  '/img/grants/img-4.png',
  '/img/grants/img-5.png',
  '/img/grants/img-6.png',
];

const Grants = () => {
  return (
    <div className={styles.gridBanners}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={420}
          height={200}
          alt={`Banner ${index}`}
        />
      ))}
    </div>
  );
};

export default Grants;
