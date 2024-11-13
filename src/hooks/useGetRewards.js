import { useState, useEffect } from 'react';

import getRewards from '@/services/getRewards';

const useGetRewards = (address, start = 0, limit = 10) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    rewards: [],
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data, total } = await getRewards(address, start, limit);

        if (data) {
          const modifyRewards = data.map(reward => {
            const status = 'status' in reward ? reward.status : 'claim';

            return {
              status,
              ...Object.values(reward.rewardsByWallet)[0],
            };
          });
          setData({
            rewards: modifyRewards,
            total: total || 0,
          });
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
