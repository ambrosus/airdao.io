import Image from 'next/image';
import HeaderNav from './HeaderNav';
import { useEffect, useRef, useState } from 'react';
import HeaderConnectedNav from './HeaderConnectedNav';
import AddressInfo from './AddressInfo';
import { useWeb3React } from '@web3-react/core';
import { useAuthorization, useAutoLogin } from 'airdao-components-and-tools/hooks';
import LoginModal from '../LoginModal/LoginModal';
import styles from './Header.module.scss';
import { createClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import {
  metamaskConnector,
  walletconnectConnector,
} from 'airdao-components-and-tools/utils';
import {ethers} from 'ethers';
import Link from 'next/link';
import {Button} from '@airdao/ui-library';

const Header = ({ header }) => {
  const [address, setAddress] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isConnectedNavOpen, setIsConnectedNavOpen] = useState(false);
  const [isAddressInfoOpen, setIsAddressInfoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [balance, setBalance] = useState("0");

  const isLoaded = useAutoLogin(metamaskConnector);
  const { account, provider } = useWeb3React();

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
  }, []);

  useEffect(() => {
    if (account) {
      getBalance()
      setAddress(account);
      setIsLoginModalOpen(false);
    }
  }, [account]);

  const { loginMetamask, loginWalletConnect, logout } = useAuthorization(
    metamaskConnector,
    walletconnectConnector
  );

  const getBalance = async () => {
    if (!provider) return;

    const bnBalance = await provider.getBalance(account);
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

  const handleLoginModal = () => setIsLoginModalOpen((state) => !state);
  const handleAddressInfo = () => setIsAddressInfoOpen((state) => !state);
  const handleConnectedNav = () => setIsConnectedNavOpen((state) => !state);
  const handleNav = () => setIsNavOpen((state) => !state);
  const handleMobileNav = () => setIsMobileNavOpen((state) => !state);

  return (
    <>
      {isLoginModalOpen && <div className={styles['blur-overlay']} />}
      <header
        className={`${styles.header} ${isFixed ? styles.header_fixed : ''}`}
        ref={headerRef}
      >
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
            <div className={styles.header__products}>
              {header.products.map((el) => (
                <a
                  key={asText(el.productname)}
                  className={styles.header__product}
                  href={el.producturl.url}
                >
                  {asText(el.productname)}
                </a>
              ))}
            </div>
            <div className={styles.header__balance}>
              <Image
                src="/airdao.svg"
                width="30"
                height="30"
                className={styles['header__balance-img']}
                alt="balance"
              />
              <span>{balance} AMB</span>
            </div>
            <div className={styles.header__address} onClick={handleAddressInfo}>
              <Image
                src="/metamask.svg"
                width="20"
                height="20"
                alt="metamask"
              />
              <span className={styles['header__address-text']}>
                {`${address.substring(0, 5)}...${address.substring(
                  address.length - 5,
                  address.length
                )}`}
              </span>
            </div>
            <button
              className={styles.header__hamburger}
              onClick={handleConnectedNav}
            >
              <Image src="/hamburger.svg" width="24" height="24" alt="menu" />
            </button>
            {isConnectedNavOpen && (
              <HeaderConnectedNav
                close={handleConnectedNav}
                headerInfo={header}
                isOpen={isConnectedNavOpen}
                balance={balance}
              />
            )}
            {isAddressInfoOpen && (
              <AddressInfo
                isOpen={isAddressInfoOpen}
                logout={handleLogout}
                address={address}
                close={handleAddressInfo}
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

            <Button type="secondary" size="medium" className={styles['connect-wallet']} onClick={handleLoginModal}>
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
              <Image src="/hamburger.svg" width="24" height="24" alt="menu" />
            </button>
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
      </header>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={handleLoginModal}
          loginMetamask={loginMetamask}
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
