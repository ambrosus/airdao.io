import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { Loader } from '@airdao/ui-library';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther as ethersFormatEther } from '@ethersproject/units';
import Image from 'next/image';

import styles from '../styles.module.scss';
import useGetRewards from '@/hooks/useGetRewards';
import usePagination from '@/hooks/usePagination';
import Pagination from '../pagination';
import RewardItem from '@/components/Reward/reward-item';

const RewardsList = () => {
  const { address: account } = useAccount();
  const methods = usePagination();
  const { start, limit } = methods;
  const { data, isLoading, refetch } = useGetRewards(account, start, limit);
  const { rewards, availableRewards } = data;

  const availableToClaim = useMemo(() => {
    const rewards = availableRewards
      ? ethersFormatEther(BigNumber.from(availableRewards))
      : '0';

    return `${rewards} AMB`;
  }, [availableRewards]);

  return (
    <>
      <h3 className={styles.title}>Claim Rewards</h3>
      <div>
        <span className={styles.desc}>Available to claim</span>
        <span className={styles.formatted}>
          <Image src="/airdao.svg" alt="airdao" width={28} height={28} />
          {availableToClaim}
        </span>
      </div>
      <div className={styles.list}>
        {isLoading ? (
          <Loader className={styles.loader} />
        ) : rewards && rewards.length >= 0 ? (
          <>
            {rewards.length > 0 ? (
              rewards.map(reward => (
                <RewardItem refetch={refetch} reward={reward} key={reward.id} />
              ))
            ) : (
              <div className={styles.item}>
                <p className={styles.text}>No rewards found</p>
              </div>
            )}
            <Pagination methods={methods} data={data} />
          </>
        ) : (
          <div className={styles.item}>
            <p className={styles.text}>No rewards found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RewardsList;
