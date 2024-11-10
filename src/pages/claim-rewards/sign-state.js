import { Button } from '@airdao/ui-library';
import Image from 'next/image';

import styles from './styles.module.scss';
import { collapseString } from '@/utils';

const SignState = ({ onSign, account }) => {
  return (
    <div className={styles.block}>
      <Image
        priority
        src="/airdao-logo.svg"
        height={81}
        width={81}
        alt="Airdao logo"
      />
      <h4>Sign message in your wallet</h4>
      <p className={styles.text}>
        Your account: <br />
        {account && collapseString(account)}
      </p>
      <Button
        type="secondary"
        onClick={onSign}
        className={styles.button}
        size="medium"
      >
        Sign in
      </Button>
    </div>
  );
};

export default SignState;
