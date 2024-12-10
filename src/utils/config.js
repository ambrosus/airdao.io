import { createAirdaoConfig } from '@airdao/ui-library';

const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

const WC_PARAMS = {
  projectId: projectId,
  metadata: {
    name: 'AirDAO',
    description:
      'AirDAO is a transparent and accessible L1 blockchain for everyone',
    url: 'https://airdao.io/',
    icons: ['https://airdao.io/favicon.svg'],
  },
};

export const config = createAirdaoConfig(WC_PARAMS, +chainId);
