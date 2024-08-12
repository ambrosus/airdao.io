import Image from 'next/image';
import device from '@/assets/img/homepage/device.webp';
import apple from '@/assets/img/homepage/apple-app.svg';
import google from '@/assets/img/homepage/google-app.svg';
import styles from '../../footer.module.scss';

const MobileApps = ({ title, description, googleLink, appleLink }) => (
  <div className={styles['footer-mobile-apps']}>
    <div className={styles['footer-mobile-apps-title']}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
    <div className={styles['download-app']}>
      <a href={googleLink} target="_blank">
        <Image src={google} alt="Google Play" />
      </a>
      <a href={appleLink} target="_blank">
        <Image src={apple} alt="AppStore" />
      </a>
    </div>
    <Image src={device} alt="Device" className={styles['footer-device']} />
  </div>
);

export default MobileApps;
