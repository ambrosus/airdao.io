import styles from './sbgInfo.module.scss';
import VPList from './VPBlock/index';
import lightningIcon from './VPBlock/assets/lightning.svg';
import stars from './VPBlock/assets/stars.svg';

const InfoCard = ({ children, cN }) => {
  return <div className={`${styles.card} ${cN}`}>{children}</div>;
};

const VPBlock = () => {
  return (
    <>
      {VPList.map((item, index) => (
        <div key={index} className={styles.vpBlock}>
          <div className={styles.photo}>
            <img src={item.photo.src} alt={item?.name || 'VPBlock'} />
          </div>
          <div className={styles.info}>
            <span>{item.name}</span>
            <div className={styles.item}>
              <img src={lightningIcon.src} alt="lightning icon" />
              <span>{item.votingPower}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const SbtInfo = () => (
  <div className={styles.cardBlock}>
    <InfoCard cN={styles.first}>
      <div className={styles.imgBlock}>
        <div className={styles.imgItem} />
      </div>
      <div className={styles.infoBlock}>
        <h3>Collect your first SBT to become AirDAO Governor</h3>
        <p>
          As AirDAO governor, you can collect various impact-based SBTs,
          increasing your voting power.
        </p>
        <a
          className={styles.link}
          href="https://airdao.io/gov-portal/connect-wallet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collect Now
        </a>
      </div>
    </InfoCard>
    <InfoCard cN={styles.second}>
      <div className={styles.vpWrapper}>
        <VPBlock />
      </div>
      <div className={styles.infoBlock}>
        <h3>
          Voting power based on your activities and influence in the Ecosystem.
          <span> The more impact, the more power weight.</span>
        </h3>
      </div>
      <img className={styles.starsAbsolute} src={stars.src} alt="stars icon" />
    </InfoCard>
    <InfoCard cN={styles.third}>
      <div className={styles.imgBlock}>
        <div className={styles.imgItem} />
      </div>
      <div className={styles.infoBlock}>
        <h3>Authenticate your identity with Fractal ID</h3>
        <p>
          The issuance of the AirDAO Governor SBT will be based on facial
          recognition using your biometric data, verified by Fractal ID.
        </p>
        <a
          href="/academy/how-to-verify-your-identity-using-fractal-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </InfoCard>
  </div>
);

export default SbtInfo;
