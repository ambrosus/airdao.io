import styles from './council.module.scss';
import CouncilList from './CouncilList';
import IconTwitter from './CouncilList/assets/icon_x.svg';
import IconLinkedin from './CouncilList/assets/icon_linkedin.svg';

const CouncilBlock = () => (
  <section className={styles.socialContainer}>
    <div className={styles.socialTitle}>
      <h3>Meet the Council</h3>
      <p>
        AirDAO is led by elected community members who ensure transparent,
        community-driven governance.
      </p>
    </div>
    <div className={styles.socialCards}>
      {CouncilList.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <img
            className={styles.itemImage}
            src={item.photo.src}
            alt={item.name}
          />
          <div className={styles.itemInfo}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.social}>
              {item.social.twitter && (
                <a
                  className={styles.socialItem}
                  href={item.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={IconTwitter.src} alt="twitter icon" />
                </a>
              )}
              {item.social.linkedin && (
                <a
                  className={styles.socialItem}
                  href={item.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={IconLinkedin.src} alt="linkedin icon" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CouncilBlock;
