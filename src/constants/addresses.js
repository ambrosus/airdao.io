const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;

const RewardDistributionAddresses = {
  16718: '0x0000000000000000000000000000000000000000',
  22040: '0xC7943C1963957F510d36619BE82684E2224f977A',
  30746: '0x0000000000000000000000000000000000000000',
};

const RewardAddress = RewardDistributionAddresses[chainId];

export const AIRDAO_ADDRESSES = {
  RewardDistribution: RewardAddress,
};
