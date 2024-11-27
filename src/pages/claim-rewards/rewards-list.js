import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
  useReadContract,
} from 'wagmi';
import { useEffect, useCallback } from 'react';
import { Button, Notify, Loader } from '@airdao/ui-library';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther as ethersFormatEther } from '@ethersproject/units';
import Image from 'next/image';
import Link from 'next/link';

import ArrowRight2Icon from '@/components/Icons/ArrowRight2';
import HumanSbtABI from '@/abis/human-sbt.abi.json';
import RewardDistributionABI from '@/abis/RewardDistribution.json';
import { AIRDAO_ADDRESSES } from '@/constants/addresses';
import styles from './styles.module.scss';
import useGetRewards from '@/hooks/useGetRewards';
import usePagination from '@/hooks/usePagination';
import Pagination from './pagination';

const RewardsList = () => {
  const { address: account } = useAccount();
  const methods = usePagination();
  const { start, limit } = methods;
  const { data, isLoading } = useGetRewards(account, start, limit);
  const { rewards, availableRewards } = data;

  const readMethods = useReadContract({
    address: AIRDAO_ADDRESSES.HumanSBTAddress,
    abi: HumanSbtABI,
    functionName: 'sbtVerify',
    args: [account],
  });

  return (
    <>
      <h3 className={styles.title}>Claim Rewards</h3>
      <div>
        <span className={styles.desc}>Available to claim</span>
        <span className={styles.formatted}>
          <Image src="/airdao.svg" alt="airdao" width={28} height={28} />
          {availableRewards
            ? ethersFormatEther(BigNumber.from(availableRewards))
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
                <RewardItem
                  checkMethods={readMethods}
                  reward={reward}
                  key={reward.id}
                />
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

const RewardItem = ({ checkMethods, reward }) => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const result = useWaitForTransactionReceipt({
    hash,
  });

  const { isLoading, isError } = checkMethods;

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

      if (isLoading || isError) {
        return true;
      }

      return false;
    },
    [isPending, isError, isLoading],
  );

  useEffect(() => {
    if (result.isSuccess) {
      Notify.success('Rewards successfully claimed!', '', {});
    }
  }, [result.isSuccess]);

  const onClaimHandler = id => {
    if (!id) {
      console.error('Reward ID is missing!');
      return;
    }

    const contractParams = {
      address: AIRDAO_ADDRESSES.RewardAddress,
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
        onClick={
          isDisabled(reward) ? undefined : () => onClaimHandler(reward.id)
        }
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
