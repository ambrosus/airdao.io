const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;

const RewardDistributionAddresses = {
  16718: '0x8d2539Df14a9851200a179C029D095218E06D6BB',
  22040: '0xC7943C1963957F510d36619BE82684E2224f977A',
};

const HumanSBTAddresses = {
  16718: '0x2d41b52C0683bed2C43727521493246256bD5B02',
  22040: '0x1c7f04A51D7349546f8424daa3355B43fcFfa7C9',
};

const HumanSBTAddress = HumanSBTAddresses[chainId];

const RewardAddress = RewardDistributionAddresses[chainId];

export const AIRDAO_ADDRESSES = {
  RewardAddress,
  HumanSBTAddress,
};
