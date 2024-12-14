import { useDisconnect } from 'wagmi';
import { Header } from '@airdao/ui-library';
import PresentIcon from '@/components/Icons/Present';
import Link from 'next/link';

const chainId = +process.env.NEXT_PUBLIC_CHAIN_ID;

const HeaderWrapper = ({ header, showBanner = false }) => {
  const { disconnect } = useDisconnect();

  const disconnectHandler = () => {
    disconnect();
    localStorage.removeItem('airdao-session-token');
  };

  return (
    <Header
      customComponent={
        <Link href="/claim-rewards">
          <PresentIcon />
        </Link>
      }
      chainId={+chainId}
      disconnect={disconnectHandler}
    />
  );
};

export default HeaderWrapper;
