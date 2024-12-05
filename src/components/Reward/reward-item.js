import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { useEffect, useCallback } from 'react';
import { Button, Notify } from '@airdao/ui-library';
import RewardDistributionABI from '@/abis/RewardDistribution.json';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther as ethersFormatEther } from '@ethersproject/units';

import { AIRDAO_ADDRESSES } from '@/constants/addresses';
import styles from './styles.module.scss';

const RewardItem = ({ checkMethods, refetch, reward }) => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  const result = useWaitForTransactionReceipt({
    hash,
  });

  const { id, amount, eventName } = reward || {};
  const { isLoading, isError } = checkMethods || {};

  const isDisabled = useCallback(
    reward => {
      if (reward && 'status' in reward) {
        if (reward.status === 'claimed' || reward.status === 'reverted') {
          return true;
        }
      }

      if (isPending) {
        return true;
      }

      return !!(isLoading || isError);
    },
    [isPending, isError, isLoading],
  );

  useEffect(() => {
    if (result.isSuccess) {
      Notify.success('Rewards successfully claimed!', '', {
        autoClose: 5000,
      });
      refetch();
    }
  }, [result.isSuccess, refetch]);

  const onClaimHandler = id => {
    if (!id) {
      console.error('Reward ID is missing!');
      return;
    }

    writeContract(
      {
        address: AIRDAO_ADDRESSES.RewardAddress,
        abi: RewardDistributionABI,
        functionName: 'claimRewards',
        args: [id],
      },
      {
        onError: error => {
          return console.error(error.message);
        },
        onSuccess: () => {
          Notify.success('You submitted to claim!', '', {
            autoClose: 5000,
          });
        },
      },
    );
  };

  const textStatus = () => {
    if (reward && 'status' in reward) {
      if (reward.status === 'reverted') {
        return 'Reverted';
      }

      if (reward.status === 'claimed') {
        return 'Claimed';
      }
    }

    return 'Claim';
  };

  const amountInWei = amount
    ? ethersFormatEther(BigNumber.from(amount))
    : BigNumber.from(0);

  return (
    <div key={id} className={styles.item}>
      <div>
        <h3 className={styles.heading}>{eventName}</h3>
        <p className={styles.text}>
          Rewards - <span>{amountInWei} AMB</span>
        </p>
      </div>
      <Button
        onClick={isDisabled(reward) ? undefined : () => onClaimHandler(id)}
        disabled={isDisabled(reward) || result.isFetching || result.isFetched}
        size="small"
        type="primary"
      >
        {textStatus()}
      </Button>
    </div>
  );
};

export default RewardItem;
