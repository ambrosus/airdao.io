import Image from 'next/image';
import styles from '../logo.module.scss';

export default function LogoBlock({ smallIcon, bigIcon, isBlack = false }) {
  return (
    <div className={styles.blocksContainer}>
      <div className={isBlack ? styles.block__black : styles.block}>
        <div className={styles.blockContent}>
          <Image
            src={smallIcon}
            alt={'logoSmall'}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.blockButtons}>
          <button onClick={() => null}>
            <p className={styles.buttonText}>PNG</p>
          </button>
          <button onClick={() => null}>
            <p className={styles.buttonText}>SVG</p>
          </button>
        </div>
      </div>
      <div className={isBlack ? styles.block__black : styles.block}>
        <div className={styles.blockContent}>
          <Image
            src={bigIcon}
            alt={'logo'}
            fill
            className={styles.singleImage}
          />
          <Image
            src={bigIcon}
            alt={'logo'}
            fill
            className={styles.singleImageSmall}
          />
        </div>
        <div className={styles.blockButtons}>
          <button onClick={() => null}>
            <p className={styles.buttonText}>PNG</p>
          </button>
          <button onClick={() => null}>
            <p className={styles.buttonText}>SVG</p>
          </button>
        </div>
      </div>
    </div>
  );
}
