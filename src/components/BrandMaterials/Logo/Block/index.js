import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import styles from '../logo.module.scss';

export default function LogoBlock({
  smallIcon,
  bigIcon,
  SVGBigLink,
  PNGBigLink,
  SVGSmallLink,
  PNGSmallLink,
  isBlack = false,
}) {
  return (
    <div className={styles.blocksContainer}>
      <div className={isBlack ? styles.block__black : styles.block}>
        <div className={styles.blockContent}>
          <PrismicNextImage field={smallIcon} alt="" className={styles.image} />
        </div>
        <div className={styles.blockButtons}>
          <Link href={PNGSmallLink?.url} rel="nofollow">
            <p className={styles.buttonText}>PNG</p>
          </Link>
          <Link href={SVGSmallLink?.url} rel="nofollow">
            <p className={styles.buttonText}>SVG</p>
          </Link>
        </div>
      </div>
      <div className={isBlack ? styles.block__black : styles.block}>
        <div className={styles.blockContent}>
          <PrismicNextImage
            field={bigIcon}
            alt=""
            fill
            className={styles.singleImage}
          />
          <PrismicNextImage
            field={bigIcon}
            alt=""
            fill
            className={styles.singleImageSmall}
          />
        </div>
        <div className={styles.blockButtons}>
          <Link href={PNGBigLink?.url} rel="nofollow">
            <p className={styles.buttonText}>PNG</p>
          </Link>
          <Link href={SVGBigLink?.url} rel="nofollow">
            <p className={styles.buttonText}>SVG</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
