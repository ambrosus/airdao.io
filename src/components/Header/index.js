'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createAirdaoConfigWithChainId } from '@airdao/ui-library';

import { Header } from '@airdao/ui-library';

const queryClient = new QueryClient();

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

const config = createAirdaoConfigWithChainId(+chainId, WC_PARAMS);

const HeaderWrapper = ({ header, showBanner = false }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Header chainId={+chainId} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default HeaderWrapper;
