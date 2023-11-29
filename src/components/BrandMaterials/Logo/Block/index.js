import { PrismicNextImage } from '@prismicio/next';
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
  const download = (filename, content) => {
    var element = document.createElement('a');
    element.setAttribute('href', content);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleDownload = async (link, name) => {
    try {
      const result = await fetch(link, {
        method: 'GET',
        headers: {},
      });
      const blob = await result.blob();
      const url = URL.createObjectURL(blob);
      download(name, url);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.blocksContainer}>
      <div className={isBlack ? styles.block__black : styles.block}>
        <div className={styles.blockContent}>
          <PrismicNextImage field={smallIcon} alt="" className={styles.image} />
        </div>
        <div className={styles.blockButtons}>
          <button
            onClick={() => handleDownload(PNGSmallLink?.url, 'AirdaoPNG')}
            type="button"
          >
            <p className={styles.buttonText}>PNG</p>
          </button>
          <button
            onClick={() => handleDownload(SVGSmallLink?.url, 'AirdaoSVG')}
            type="button"
          >
            <p className={styles.buttonText}>SVG</p>
          </button>
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
          <button
            onClick={() => handleDownload(PNGBigLink?.url, 'LogoPNG')}
            type="button"
          >
            <p className={styles.buttonText}>PNG</p>
          </button>
          <button
            onClick={() => handleDownload(SVGBigLink?.url, 'LogoSVG')}
            type="button"
          >
            <p className={styles.buttonText}>SVG</p>
          </button>
        </div>
      </div>
    </div>
  );
}
