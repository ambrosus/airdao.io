import { Loader } from '@airdao/ui-library';

import styles from './styles.module.scss';

const LoadingState = ({ title, text }) => {
  return (
    <div className={styles.block}>
      <h4>{title}</h4>
      <p className={styles.text}>{text}</p>
      <Loader className={styles.loader} />
    </div>
  );
};

export default LoadingState;
