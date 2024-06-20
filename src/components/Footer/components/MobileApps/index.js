import Link from 'next/link';
import Image from 'next/image';
import apple from '@/assets/img/homepage/apple-app.svg';
import google from '@/assets/img/homepage/google-app.svg';
import styles from '../../footer.module.scss';

const MobileApps = () => (
  <div className={styles['footer-mobile-apps']}>
    <div className={styles['footer-mobile-apps-title']}>
      <span>
        Keep your assets safe with the wallet build-in AirDAO Mobile app
      </span>
      <span>
        Download the app now and experience seamless management on the go.
      </span>
    </div>
    <div className={styles['download-app']}>
      <Link href="#">
        <Image src={apple} alt="rocket" />
      </Link>
      <Link href="#">
        <Image src={google} alt="rocket" />
      </Link>
    </div>
  </div>
);

export default MobileApps;
