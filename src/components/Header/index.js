'use client';
import Header from './Header';
import { Web3ReactProvider } from '@web3-react/core';

import {
  metamaskConnector,
  metamaskHooks,
  walletconnectConnector,
  walletconnectHooks,
} from 'airdao-components-and-tools/utils';

const connectors = [
  [metamaskConnector, metamaskHooks],
  [walletconnectConnector, walletconnectHooks],
];

const HeaderWrapper = ({ header }) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Header header={header.data} />
    </Web3ReactProvider>
  );
};

export default HeaderWrapper;
