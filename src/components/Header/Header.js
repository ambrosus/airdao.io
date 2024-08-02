import { createClient } from '@/prismicio';
import { Button } from '@airdao/ui-library';
import { asText } from '@prismicio/client';
import { useWeb3React } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect-v2';
import {
  useAuthorization,
  useAutoLogin,
} from 'airdao-components-and-tools/hooks';
import {
  getCurrentAmbNetwork,
  metamaskConnector,
  walletconnectConnector,
} from 'airdao-components-and-tools/utils';
import { ethers, providers } from 'ethers';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import AddressInfo from './AddressInfo';
import styles from './Header.module.scss';
import HeaderConnectedNav from './HeaderConnectedNav';
import HeaderNav from './HeaderNav';
import TailArrow from '../Icons/TailArrow';
import ArrowTop from '../Icons/ArrowTop';
import MetaMaskIcon from '../Icons/MetaMaskIcon';
import WalletConnectIcon from '../Icons/WalletConnectIcon';
import useGtag from '@/hooks/useGtag';

const ambNet = getCurrentAmbNetwork(process.env.NEXT_PUBLIC_CHAIN_ID);

const readProvider = new providers.JsonRpcProvider(ambNet.rpcUrl);

const Header = ({ header, showBanner = false }) => {
  useGtag();

  const [address, setAddress] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isConnectedNavOpen, setIsConnectedNavOpen] = useState(false);
  const [isAddressInfoOpen, setIsAddressInfoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [balance, setBalance] = useState('0');

  const isLoaded = useAutoLogin(metamaskConnector);
  const { account, connector, provider } = useWeb3React();

  const headerRef = useRef(null);

  useEffect(() => {
    const headerOffsetTop = headerRef.current.offsetTop;

    const handleFixed = () => {
      if (window.scrollY >= headerOffsetTop - 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    handleFixed();

    window.addEventListener('scroll', handleFixed);
    return () => window.removeEventListener('scroll', handleFixed);
  }, [showBanner]);

  useEffect(() => {
    if (window.innerWidth < 610) {
      const body = document.querySelector('body');

      if (body) {
        body.style.overflow = isMobileNavOpen ? 'hidden' : 'auto';
      }
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (account) {
      getBalance();
      setAddress(account);
      setIsLoginModalOpen(false);

      readProvider.on('block', getBalance);
    }

    return () => {
      if (!account) return;
      readProvider.removeAllListeners();
    };
  }, [account]);

  const { loginMetamask, loginWalletConnect, loginSafepal, logout } = useAuthorization(
    metamaskConnector,
    walletconnectConnector,
  );

  const getBalance = async () => {
    if (!provider) return;

    const bnBalance = await readProvider.getBalance(account);
    const numBalance = ethers.utils.formatEther(bnBalance);
    setBalance((+numBalance).toFixed(2));
  };
  const handleLogout = () => {
    logout();
    setAddress('');
    setIsAddressInfoOpen(false);
    setIsNavOpen(false);
    setIsLoginModalOpen(false);
  };

  const handleLoginModal = () => setIsLoginModalOpen(state => !state);
  const handleAddressInfo = () => setIsAddressInfoOpen(state => !state);
  const handleConnectedNav = () => setIsConnectedNavOpen(state => !state);
  const handleNav = () => setIsNavOpen(state => !state);
  const handleMobileNav = () => setIsMobileNavOpen(state => !state);

  return (
    <>
      {isLoginModalOpen && <div className={styles['blur-overlay']} />}
      <header
        className={`${styles.header} ${isFixed ? styles.header_fixed : ''} ${
          showBanner ? styles.header_banner : ''
        }`}
        ref={headerRef}
      >
        <div className={styles['header-container']}>
          <Link href="/">
            <Image
              src="/logo.svg"
              width="160"
              height="34"
              className={styles.header__logo}
              alt="logo"
            />
          </Link>
          {address ? (
            <>
              <HeaderNav
                close={handleNav}
                headerInfo={header}
                className="nav-item-wrapper_desktop"
                isOpen={isNavOpen}
              />
              <div className={styles['header__buttons']}>
                <Link
                  href={header.amburl.url}
                  className={styles['header__button-tetiary']}
                >
                  <Button type="tetiary" size="medium">
                    <span>Get AMB</span>
                    <TailArrow />
                  </Button>
                </Link>
                <div
                  className={styles.header__address}
                  onClick={handleAddressInfo}
                >
                  {connector instanceof WalletConnect ? (
                    <WalletConnectIcon />
                  ) : (
                    <MetaMaskIcon />
                  )}
                  <span className={styles['header__address-text']}>
                    {`${address.substring(0, 5)}...${address.substring(
                      address.length - 5,
                      address.length,
                    )}`}
                  </span>
                  <ArrowTop
                    className={`${styles['header__address-arrow']} ${isAddressInfoOpen ? '' : styles['open']
                      }`}
                  />
                </div>
                <button
                  onClick={handleMobileNav}
                  className={styles['hamburger-btn']}
                >
                  {isMobileNavOpen ? (
                    <Image
                      src="/cross-dark.svg"
                      width="24"
                      height="24"
                      alt="menu"
                    />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width="24"
                      height="24"
                      alt="menu"
                    />
                  )}
                </button>
              </div>

              {isConnectedNavOpen && (
                <HeaderConnectedNav
                  close={handleConnectedNav}
                  headerInfo={header}
                  isOpen={isConnectedNavOpen}
                />
              )}
              {isAddressInfoOpen && (
                <AddressInfo
                  isOpen={isAddressInfoOpen}
                  balance={balance}
                  logout={handleLogout}
                  address={address}
                  close={handleAddressInfo}
                />
              )}
              {isMobileNavOpen && (
                <HeaderNav
                  isOpen={isMobileNavOpen}
                  close={handleMobileNav}
                  headerInfo={header}
                  className="nav-item-wrapper_not-desktop"
                />
              )}
            </>
          ) : (
            <>
              <HeaderNav
                close={handleNav}
                headerInfo={header}
                className="nav-item-wrapper_desktop"
                isOpen={isNavOpen}
              />

              <div className={styles['header__buttons']}>
                <Link
                  href={header.amburl.url}
                  className={styles['header__button-tetiary']}
                >
                  <Button type="tetiary" size="medium">
                    <span>Get AMB</span>
                    <TailArrow />
                  </Button>
                </Link>
                <Button
                  type="secondary"
                  size="medium"
                  className={styles['connect-wallet']}
                  onClick={handleLoginModal}
                >
                  <Image
                    src="/pocket.svg"
                    height="20"
                    width="20"
                    alt="connect wallet"
                    className={styles['connect-wallet-img']}
                  />
                  <span className={styles['connect-wallet-text']}>
                    Connect wallet
                  </span>
                </Button>

                <button
                  onClick={handleMobileNav}
                  className={styles['hamburger-btn']}
                >
                  {isMobileNavOpen ? (
                    <Image
                      src="/cross-dark.svg"
                      width="24"
                      height="24"
                      alt="menu"
                    />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width="24"
                      height="24"
                      alt="menu"
                    />
                  )}
                </button>
              </div>
              {isMobileNavOpen && (
                <HeaderNav
                  isOpen={isMobileNavOpen}
                  close={handleMobileNav}
                  headerInfo={header}
                  className="nav-item-wrapper_not-desktop"
                />
              )}
            </>
          )}
        </div>
      </header>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={handleLoginModal}
          loginMetamask={loginMetamask}
          loginSafepal={loginSafepal}
          loginWalletConnect={loginWalletConnect}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');

  return {
    props: { page },
  };
}

export default Header;
