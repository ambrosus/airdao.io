import { useDisconnect } from 'wagmi';
import { Header } from '@airdao/ui-library';

const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;

const HeaderWrapper = ({ header, showBanner = false }) => {
  const { disconnect } = useDisconnect();

  const disconnectHandler = () => {
    disconnect();
    localStorage.removeItem('airdao-session-token');
  };

  return <Header chainId={+chainId} disconnect={disconnectHandler} />;
};

export default HeaderWrapper;
