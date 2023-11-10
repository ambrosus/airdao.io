import Image from 'next/image';
import styles from '../colors.module.scss';

export default function ColorsBlock({ icon, fontName, fonts = [] }) {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.block}>
        <div className={styles.blockContent}>
          <Image src={icon} alt={'logoSmall'} fill className={styles.image} />
        </div>
        <div className={styles.blockButtons}>
          <p className={styles.fontName}>{fontName}</p>
          <div className={styles.fonts}>
            {fonts?.map((font, index) => (
              <div onClick={() => null} key={index}>
                <p className={styles.fontText}>{font}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
