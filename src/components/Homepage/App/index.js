import styles from './app.module.scss';
import Image from 'next/image';
import appStore from './appstore.svg';
import googlePlay from './googlplay.svg';
import app from './app.svg';

const App = () => (
  <div className={`container`}>
    <div className={styles.app}>
      <div className={styles.app__left}>
        <p className={styles.app__title}>
          Take AirDAO <span>everywhere</span>
        </p>
        <ul className={styles.app__list}>
          <li className={styles['app__list-item']}>Manage your portfolio</li>
          <li className={styles['app__list-item']}>Send and receive tokens</li>
          <li className={styles['app__list-item']}>Watch AMB wallets</li>
        </ul>
        <Image className={styles.app__appstore} src={appStore} alt="app store" />
        <Image className={styles.app__google} src={googlePlay} alt="google play" />
      </div>
      <div className={styles.app__right}>
        <Image src={app} alt="app"/>
      </div>
    </div>
  </div>
);

export default App;
