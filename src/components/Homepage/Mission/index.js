import styles from './mission.module.scss';
import BlockLabel from '@/components/BlockLabel';

const Mission = () => (
  <div className={styles['mission']}>
    <div className="container">
      <BlockLabel className={styles['mission__label']}>
        OUR MISSION
      </BlockLabel>
      <h3 className={styles['mission__title']}>We empower our users with innovative products</h3>
      <p className={styles['mission__text']}>
        We create the products our community wants. We take their suggestions and
        build, getting their feedback as we go. Join us in defining the future of web3.
      </p>
    </div>
  </div>
);

export default Mission;
