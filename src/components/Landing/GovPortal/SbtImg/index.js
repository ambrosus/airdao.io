import styles from './sbt.module.scss';
import sbtList from './SbtList';

const SbtBlock = () => (
  <section className={styles.sbtContainer}>
    <h2>
      Our community-led DAO empowers every member with voting rights via AirDAO
      Governor SBT. With nine elected council members, our global community
      drives leadership and development.
    </h2>
    <h3>Recognition of diverse contributions</h3>
    <p>
      Depending on what role you serve, you will be awarded governance SBTs
      corresponding to the benefits you contribute to AirDAO.
    </p>
    <div className={styles.tokenWrapper}>
      {sbtList.map((item, index) => (
        <span key={index} className={styles.tokenItem}>
          <img
            className={styles.tokenImage}
            src={item.token.src}
            alt={item.name}
          />
        </span>
      ))}
    </div>
  </section>
);

export default SbtBlock;
