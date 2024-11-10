import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
} from 'wagmi';
import { useEffect, useCallback } from 'react';
import { Button, Notify, Loader } from '@airdao/ui-library';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther as ethersFormatEther } from '@ethersproject/units';
import Image from 'next/image';

import RewardDistributionABI from '@/abis/RewardDistribution.json';
import { AIRDAO_ADDRESSES } from '@/constants/addresses';
import styles from './styles.module.scss';
import useGetRewards from '@/hooks/useGetRewards';
import Link from 'next/link';
import ArrowRight2Icon from '@/components/Icons/ArrowRight2';
import usePagination from '@/hooks/usePagination';

const sumRewardsAmount = rewards => {
  return rewards.reduce((total, reward) => {
    if (!('status' in reward)) {
      return total.add(BigNumber.from(reward.amount));
    }
    return total;
  }, BigNumber.from(0));
};

const RewardsList = () => {
  const { address: account } = useAccount();
  const { start, limit, currentPage, goToPage } = usePagination();
  const { data: rewards, isLoading } = useGetRewards(account, start, limit);

  return (
    <>
      <h3 className={styles.title}>Claim Rewards</h3>
      <div>
        <span className={styles.desc}>Available to claim</span>
        <span className={styles.formatted}>
          <Image src="/airdao.svg" alt="airdao" width={28} height={28} />
          {rewards && rewards.length > 0
            ? ethersFormatEther(sumRewardsAmount(rewards))
            : '0'}{' '}
          AMB
        </span>
      </div>
      <div className={styles.infoBlock}>
        <p>Governor SBT is required to claim rewards.</p>
        <Link href="/">
          <button className={styles.button}>
            Learn more
            <ArrowRight2Icon />
          </button>
        </Link>
      </div>
      <div className={styles.list}>
        {isLoading ? (
          <Loader className={styles.loader} />
        ) : rewards && rewards.length >= 0 ? (
          <>
            {rewards.length > 0 ? (
              rewards.map(reward => (
                <RewardItem reward={reward} key={reward.id} />
              ))
            ) : (
              <div className={styles.item}>
                <p className={styles.text}>No rewards found</p>
              </div>
            )}
            <div className={styles.pagination}>
              <Button
                size="small"
                type="secondary"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Prev
              </Button>
              <Button
                size="small"
                type="secondary"
                onClick={() => goToPage(currentPage + 1)}
                disabled={rewards.length === 0}
              >
                Next
              </Button>
            </div>
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

const RewardItem = ({ reward }) => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const result = useWaitForTransactionReceipt({
    hash,
  });

  const isDisabled = useCallback(
    reward => {
      if ('status' in reward) {
        if (reward.status === 'claimed' || reward.status === 'reverted') {
          return true;
        }
      }

      if (isPending) {
        return true;
      }

      return false;
    },
    [isPending],
  );

  useEffect(() => {
    if (result.isSuccess) {
      Notify.success('Rewards successfully claimed!', '', {});
    }
  }, [result.isSuccess]);

  const onClaim = id => {
    if (!id) {
      console.error('Reward ID is missing!');
      return;
    }

    const contractParams = {
      address: AIRDAO_ADDRESSES.RewardDistribution,
      abi: RewardDistributionABI,
      functionName: 'claimRewards',
      args: [id],
    };

    writeContract(contractParams, {
      onError: error => {
        return console.error(error.message);
      },
      onSuccess: () => {
        Notify.success('You submitted to claim!', '', {});
      },
    });
  };

  const textStatus = () => {
    if ('status' in reward) {
      if (reward.status === 'reverted') {
        return 'Reverted';
      }

      if (reward.status === 'claimed') {
        return 'Claimed';
      }
    }

    return 'Claim';
  };

  const amountInWei = ethersFormatEther(BigNumber.from(reward.amount));
  return (
    <div key={reward.id} className={styles.item}>
      <div>
        <h3 className={styles.heading}>{reward.eventName}</h3>
        <p className={styles.text}>
          Rewards - <span>{amountInWei} AMB</span>
        </p>
      </div>
      <Button
        onClick={() => onClaim(reward.id)}
        disabled={isDisabled(reward) || result.isFetching || result.isFetched}
        size="small"
        type="primary"
      >
        {textStatus()}
      </Button>
    </div>
  );
};

export default RewardsList;
