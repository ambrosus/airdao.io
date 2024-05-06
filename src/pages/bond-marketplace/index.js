import { Web3ReactProvider } from '@web3-react/core';
import {
  metamaskConnector,
  metamaskHooks,
  walletconnectConnector,
  walletconnectHooks,
} from 'airdao-components-and-tools/utils';
import BondExchange from '@/components/Bond/BondExchange';
import { createClient } from '@/prismicio';
import Seo from '@/components/Seo';

const connectors = [
  [metamaskConnector, metamaskHooks],
  [walletconnectConnector, walletconnectHooks],
];

const HeaderWrapper = props => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Seo
        title={props.page.data.meta_title}
        description={props.page.data.meta_description}
        image={props.page.data.meta_image.url}
      />
      <BondExchange {...props} />
    </Web3ReactProvider>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('bond_marketplace');
  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  return {
    props: { header, page, footerText: footer },
  };
}

export default HeaderWrapper;
