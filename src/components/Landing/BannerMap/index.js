import React from 'react';
import styles from './banner.module.scss';

import { Button } from '@airdao/ui-library';
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
        <Button size="large" type="tetiary">
          Get started
        </Button>
        <Button size="large" type="primary">
          Learn more
          <ChevronIcon />
        </Button>
      </div>
    </div>
  );
};

export default BannerMap;