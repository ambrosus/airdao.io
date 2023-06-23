import Image from 'next/image';
import HeaderNav from './HeaderNav';
import { useEffect, useState } from 'react';
import HeaderConnectedNav from './HeaderConnectedNav';
import AddressInfo from './AddressInfo';
import { useWeb3React } from '@web3-react/core';
// import { useAuthorization } from 'airdao-components-and-tools/hooks';
import LoginModal from '../LoginModal/LoginModal';
import styles from './Header.module.scss';
import { createClient } from '@/prismicio';

const Header = ({ header, isTablet, isMobile }) => {
  const [address, setAddress] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isConnectedNavOpen, setIsConnectedNavOpen] = useState(false);
  const [isAddressInfoOpen, setIsAddressInfoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const web3ReactInstance = useWeb3React();
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      setAddress(account);
      setIsLoginModalOpen(false);
    }
  }, [account]);

  const { loginMetamask, loginWalletConnect, logout } = {}
    // useAuthorization(web3ReactInstance);

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

  return (
    <>
      <div className={styles.header}>
        <Image
          src="/logo.svg"
          width="160"
          height="34"
          className={styles.header__logo}
          alt="logo"
        />
        {address ? (
          <>
            <div className="header__products">
              <a href="/" className={styles.header__product}>
                FirepotSwap
              </a>
              <a href="/" className={styles.header__product}>
                Bridge
              </a>
              <a href="/" className={styles.header__product}>
                Staking
              </a>
              <a href="/" className={styles.header__product}>
                Explorer
              </a>
            </div>
            <div className={styles.header__balance}>
              <Image
                src="/airdao.svg"
                width="30"
                height="30"
                className={styles['header__balance-img']}
                alt="balance"
              />
              <span>0.00 AMB</span>
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
            <button className={styles.header__hamburger} onClick={handleConnectedNav}>
              <Image src="/hamburger.svg" width="24" height="24" alt="menu" />
            </button>
            {isConnectedNavOpen && (
              <HeaderConnectedNav close={handleConnectedNav} />
            )}
            {isAddressInfoOpen && (
              <AddressInfo
                logout={handleLogout}
                address={address}
                close={handleAddressInfo}
              />
            )}
          </>
        ) : (
          <>
            {isTablet === false && <HeaderNav close={handleNav} />}
            <button className={styles['ui-button']} onClick={handleLoginModal}>
              {isMobile === true ? (
                <Image
                  src="/pocket.svg"
                  height="20"
                  width="20"
                  alt="connect wallet"
                />
              ) : (
                'Connect wallet'
              )}
            </button>
            {isTablet === true && (
              <>
                <button onClick={handleNav}>
                  <Image
                    src="/hamburger.svg"
                    width="24"
                    height="24"
                    alt="menu"
                  />
                </button>
                {isNavOpen && <HeaderNav close={handleNav} />}
              </>
            )}
          </>
        )}
      </div>
      {isLoginModalOpen && (
        <LoginModal
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
