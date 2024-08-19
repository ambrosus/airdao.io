'use client';
import { Web3ReactProvider } from '@web3-react/core';
import Header from './Header';

import {
  metamaskConnector,
  metamaskHooks,
  walletconnectConnector,
  walletconnectHooks,
  bitgetWalletConnector,
  bitgetHooks,
} from 'airdao-components-and-tools/utils';

const connectors = [
  [metamaskConnector, metamaskHooks],
  [walletconnectConnector, walletconnectHooks],
  [bitgetWalletConnector, bitgetHooks],
];

const HeaderWrapper = ({ header, showBanner = false }) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Header header={header.data} showBanner={showBanner} />
    </Web3ReactProvider>
  );
};

export default HeaderWrapper;
