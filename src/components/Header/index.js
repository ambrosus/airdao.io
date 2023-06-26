import Header from './Header';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const getLibrary = (provider) => new ethers.providers.JsonRpcProvider(provider);

const HeaderWrapper = ({ header }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header header={header.data} />
    </Web3ReactProvider>
  );
};

export default HeaderWrapper;
