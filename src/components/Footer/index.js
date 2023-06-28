import styles from './footer.module.scss';
import Image from "next/image";
import phones from './phones.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__inner}>
      <div className={styles['footer-app']}>
        <p className={styles['footer-app__title']}>
          Experience the ease of tracking token addresses{' '}
          <span className={styles['footer-app__title-span']}>on-the-go!</span>
        </p>
        <button className={styles['footer-app__btn']}>Download App</button>
        <div className={styles['footer-app__img']}>
          <Image src={phones} alt="mobile app" />
        </div>
      </div>
      <div className={styles.footer__lists}>
        <ul className={styles.footer__list}>
          <li className={styles['footer__lists-title']}>
            About
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">About us</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Team</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Governance</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Ambassador Program</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Blog</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">FAQs</a>
          </li>
        </ul>
        <ul className={styles.footer__list}>
          <li className={styles['footer__lists-title']}>
            Products
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">FirepotSwap</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Staking</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Bridge</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Network Explorer</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">AirBond marketplace</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">DAO Tools</a>
            <span className={styles['footer__lists-soon']}>COMING SOON</span>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Stablecoin</a>
            <span className={styles['footer__lists-soon']}>COMING SOON</span>
          </li>
        </ul>
        <ul className={styles.footer__list}>
          <li className={styles['footer__lists-title']}>
            Be involved
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Become an Ambassador</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Job openings</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Community Contribution</a>
          </li>
          <li className={styles['footer__lists-title']}>
            Resources
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Press & PR kit</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Change Log</a>
          </li>
        </ul>
        <ul className={styles.footer__list}>
          <li className={styles['footer__lists-title']}>
            Contact
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">support@airdao.io</a>
          </li>
          <li className={styles['footer__lists-item']}>
            <a href="">Feedback Form & Bug Reports</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
