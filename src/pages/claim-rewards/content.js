import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { ConnectWalletModalProvider } from '@airdao/ui-library';
import { jwtDecode } from 'jwt-decode';

import RewardsList from './rewards-list';
import ConnectWallet from './connect-wallet';
import SignState from './sign-state';
import LoadingState from './loading-state';

import signIn from '@/services/signIn';
import { useEthersWeb3Provider } from '@/hooks/useEthersProvider';

import styles from './styles.module.scss';

const isTokenExpired = token => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now();
    return decoded.expiresAt < currentTime;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return true;
  }
};

const Content = () => {
  const { address, isConnected, isActivating, chainId } = useAccount();
  const [state, setState] = useState('connect');
  const provider = useEthersWeb3Provider({ chainId });

  useEffect(() => {
    const sessionToken = localStorage.getItem('airdao-session-token');

    if (!sessionToken || isTokenExpired(sessionToken)) {
      localStorage.removeItem('airdao-session-token');

      if (!isConnected && !isActivating) return setState('connect');

      return setState('sign');
    }

    if (!isConnected && !isActivating) return setState('connect');
    if (isConnected && !sessionToken) return setState('sign');
    if (isConnected && sessionToken) return setState('connected');
  }, [isConnected, isActivating]);

  const onSignInHandler = async () => {
    if (!provider && !address) {
      return;
    }
    setState('signing');

    try {
      await signIn(address, provider);
      setState('connected');
    } catch {
      setState('sign');
    }
  };

  return (
    <ConnectWalletModalProvider>
      {state === 'connected' && (
        <div className={`${styles.container} ${styles.bg1}`}>
          <div className={styles.innerContainer}>
            <RewardsList />
          </div>
        </div>
      )}
      {state === 'connect' && (
        <div
          className={`${styles.container} ${styles.largeInset} ${styles.bg2}`}
        >
          <div className={styles.connectContainer}>
            <ConnectWallet />
          </div>
        </div>
      )}
      {state === 'sign' && (
        <div
          className={`${styles.container} ${styles.largeInset} ${styles.bg2}`}
        >
          <div className={styles.connectContainer}>
            <SignState onSign={onSignInHandler} account={address} />
          </div>
        </div>
      )}
      {state === 'signing' && (
        <div
          className={`${styles.container} ${styles.largeInset} ${styles.bg2}`}
        >
          <div className={styles.connectContainer}>
            <LoadingState
              title={'Sign message'}
              text={'You may need to click the extension to sign message'}
            />
          </div>
        </div>
      )}
    </ConnectWalletModalProvider>
  );
};

export default Content;
