import brandStyles from '../brand.module.scss';
import ColorsBlock from './Block';
import styles from './colors.module.scss';
import blueIcon from './icons/blue.svg';
import darkIcon from './icons/dark.svg';
import gradientIcon from './icons/gradient.svg';
import lightIcon from './icons/light.svg';
import orangeIcon from './icons/orange.svg';
import primaryIcon from './icons/primary.svg';

export default function Colors({ heading, text }) {
  return (
    <div className={brandStyles.container}>
      <div className={brandStyles.wrapper}>
        <h1 className={brandStyles.headerText}>Colors</h1>
        <div className={styles.iconsContainer}>
          <ColorsBlock
            icon={primaryIcon}
            fontName={'Primary'}
            fonts={['#3568DD']}
          />
          <ColorsBlock
            icon={orangeIcon}
            fontName={'Secondary'}
            fonts={['#FF5E0D']}
          />
          <ColorsBlock
            icon={blueIcon}
            fontName={'Secondary'}
            fonts={['#A4BBF0']}
          />
          <ColorsBlock
            icon={darkIcon}
            fontName={'Dark background'}
            fonts={['#191919']}
          />
          <ColorsBlock
            icon={lightIcon}
            fontName={'Light background'}
            fonts={['#EDF3FF']}
          />
          <ColorsBlock
            icon={gradientIcon}
            fontName={'Gradient'}
            fonts={['#457EFF', '#1A3D8D']}
          />
        </div>
      </div>
    </div>
  );
}
