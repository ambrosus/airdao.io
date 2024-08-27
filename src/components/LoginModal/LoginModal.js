import Image from 'next/image';
import Modal from '../Modal/Modal';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from './LoginModal.module.scss';
import bitgetIcon from '../Header/bitget.png';

const LoginModal = ({
  closeModal,
  loginMetamask,
  loginWalletConnect,
  loginSafepal,
  loginBitget,
  isOpen,
}) => {
  const ref = useRef(null);
  useClickOutside(ref, closeModal, isOpen);

  return (
    <div ref={ref}>
      <Modal closeModal={closeModal}>
        <div className={styles['login-modal']}>
          <Image src="/airdao-login.svg" width="65" height="65" alt="login" />
          <p className={styles['login-modal__subtitle']}>
            Connect a wallet to use AirDAO
          </p>
          <button
            className={styles['login-modal__btn']}
            onClick={loginMetamask}
          >
            <Image
              src="/metamask.svg"
              width="28"
              height="25"
              className={styles['login-modal__img']}
              alt="metamask"
            />
            <div className={styles['login-modal__block']}>
              <p className={styles['login-modal__title']}>MetaMask</p>
              <p className={styles['login-modal__text']}>
                Connect using your browser wallet
              </p>
            </div>
            <Image
              src="/arrow.svg"
              width="16"
              height="16"
              className={styles['login-modal__arrow']}
              alt="arrow"
            />
          </button>
          <button
            className={styles['login-modal__btn']}
            style={{ marginTop: 16 }}
            onClick={loginSafepal}
          >
            <Image
              src="/safepal.svg"
              width="28"
              height="25"
              className={styles['login-modal__img']}
              alt="metamask"
            />
            <div className={styles['login-modal__block']}>
              <p className={styles['login-modal__title']}>SafePal</p>
              <p className={styles['login-modal__text']}>
                Connect using your SafePal wallet
              </p>
            </div>
            <Image
              src="/arrow.svg"
              width="16"
              height="16"
              className={styles['login-modal__arrow']}
              alt="arrow"
            />
          </button>
          <button className={styles['login-modal__btn']} style={{ marginTop: 16 }} onClick={loginBitget}>
            <img
              src={bitgetIcon.src}
              width='28'
              height='25'
              className={styles['login-modal__img']}
              alt='bitget'
            />
            <div className={styles['login-modal__block']}>
              <p className={styles['login-modal__title']}>Bitget Waller</p>
              <p className={styles['login-modal__text']}>
                Connect using your Bitget wallet
              </p>
            </div>
            <Image
              src="/arrow.svg"
              width="16"
              height="16"
              className={styles['login-modal__arrow']}
              alt="arrow"
            />
          </button>
          <button
            className={styles['login-modal__btn']}
            onClick={loginWalletConnect}
          >
            <Image
              src="/wallet-connect.svg"
              width="28"
              height="16"
              className={styles['login-modal__img']}
              alt="wallet connect"
            />
            <div className={styles['login-modal__block']}>
              <p className={styles['login-modal__title']}>WalletConnect</p>
              <p className={styles['login-modal__text']}>
                Connect using WalletConnect
              </p>
            </div>
            <Image
              src="/arrow.svg"
              width="16"
              height="16"
              className={styles['login-modal__arrow']}
              alt="arrow"
            />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
