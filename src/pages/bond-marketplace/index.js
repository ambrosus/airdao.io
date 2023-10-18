'use client';
import { Web3ReactProvider } from '@web3-react/core';
import {
  metamaskConnector,
  metamaskHooks,
  walletconnectConnector,
  walletconnectHooks,
} from 'airdao-components-and-tools/utils';
import BondExchange from '@/components/Bond/BondExchange';
import {createClient} from '@/prismicio';

const connectors = [
  [metamaskConnector, metamaskHooks],
  [walletconnectConnector, walletconnectHooks],
];

const HeaderWrapper = (props) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <BondExchange {...props} />
    </Web3ReactProvider>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: { header, footerText: footer },
  };
}

export default HeaderWrapper;
