import brandStyles from '../brand.module.scss';
import LogoBlock from './Block';
import blackIcon from './icons/black.svg';
import blackSmallIcon from './icons/black_small.svg';
import blueIcon from './icons/blue.svg';
import blueSmallIcon from './icons/blue_small.svg';
import whiteIcon from './icons/white.svg';
import whiteSmallIcon from './icons/white_small.svg';
import styles from './logo.module.scss';

export default function Logo({ heading, text }) {
  return (
    <div className={brandStyles.container}>
      <div className={brandStyles.wrapper}>
        <h1 className={brandStyles.headerText}>Logo</h1>
        <div className={styles.iconsContainer}>
          <LogoBlock smallIcon={blueSmallIcon} bigIcon={blueIcon} />
          <LogoBlock smallIcon={blackSmallIcon} bigIcon={blackIcon} />
          <LogoBlock smallIcon={whiteSmallIcon} bigIcon={whiteIcon} isBlack />
        </div>
      </div>
    </div>
  );
}
