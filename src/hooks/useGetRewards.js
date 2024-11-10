import { useState, useEffect } from 'react';

import getRewards from '@/services/getRewards';

const useGetRewards = (address, start = 0, limit = 10) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const rewards = await getRewards(address, start, limit);

        if (rewards) {
          const modifyRewards = rewards.map(reward => {
            const status = 'status' in reward ? reward.status : '';

            return {
              status,
              ...Object.values(reward.rewardsByWallet)[0],
            };
          });
          setData(modifyRewards);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.warn(error);
      }
    };
    fetchData();
  }, [address, start, limit]);

  return {
    data,
    isLoading,
  };
};

export default useGetRewards;
