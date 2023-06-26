import Header from './Header';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const getLibrary = (provider) => new ethers.providers.JsonRpcProvider(provider);
function isBoolean(val) {
  return val === false || val === true;
}
const HeaderWrapper = ({ header }) => {
  const [isTablet, setIsTablet] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 610);
      setIsTablet(window.innerWidth < 950);
    }
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {isBoolean(isMobile) && (
        <Header header={header.data} isTablet={isTablet} isMobile={isMobile} />
      )}
    </Web3ReactProvider>
  );
};

export default HeaderWrapper;
