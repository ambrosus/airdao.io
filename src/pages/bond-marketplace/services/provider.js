import { AmbErrorProvider } from '@airdao/airdao-node-contracts';
// eslint-disable-next-line
import { allAmbNetworksConfig } from 'airdao-components-and-tools/utils';

const chainId = process.env.NEXT_PUBLIC_CHAIN_ID;
const rpcUrl = allAmbNetworksConfig[chainId].rpcUrl;

const ambReadProvider = new AmbErrorProvider(rpcUrl, +chainId);

export default ambReadProvider;
