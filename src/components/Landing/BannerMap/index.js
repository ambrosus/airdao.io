import Link from 'next/link';
import { Button } from '@airdao/ui-library';

import styles from './banner.module.scss';

import WorldRight from '@/components/Icons/WorldRight';
import WorldLeft from '@/components/Icons/WorldLeft';
import ChevronIcon from '@/components/Icons/ChevronIcon';

const BannerMap = () => {
  return (
    <div className={styles.banner}>
      <WorldLeft className={styles.worldLeft} />
      <WorldRight className={styles.worldRight} />
      <div className={styles.holder}>
        <h3>New era of AirDAO Governance</h3>
        <p>
          We aim for transparent on-chain governance, ensuring every AirDAO
          community member has voting rights and governance power according to
          their engagement via AirDAO Governor SBT
        </p>
        <Link href="https://airdao.io/gov-portal/connect-wallet">
          <Button size="large" type="tetiary">
            Get started
          </Button>
        </Link>
        <Link target="_blank" href="https://airdao.io/academy#governance">
          <Button size="large" type="primary">
            Learn more
            <ChevronIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BannerMap;
