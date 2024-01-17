import Image from 'next/image';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState } from 'react';
import styles from './Header.module.scss';

const AddressInfo = ({ address, balance, logout, close, isOpen }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const copy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles['address-info']} ref={ref}>
      <div className={styles['address-info__block-wrapper']}>
        <div className={styles['address-info__block']}>
          <span className={styles['address-info__address']}>
            {`${address.substring(0, 5)}...${address.substring(
              address.length - 5,
              address.length,
            )}`}
          </span>
          <span
            style={!copied ? { display: 'none' } : {}}
            className={styles['address-info__copied']}
          >
            Address copied!
          </span>
          <Image
            src="/copy.svg"
            width="20"
            height="20"
            onClick={copy}
            style={copied ? { display: 'none' } : {}}
            className={styles['address-info__copy']}
            alt="copy"
          />
        </div>

        <div className={styles.header__balance}>
          <Image
            src="/airdao.svg"
            width="20"
            height="20"
            className={styles['header__balance-img']}
            alt="balance"
          />
          <span>{balance} AMB</span>
        </div>
      </div>
      <hr />
      <button className={styles['address-info__disconnect']} onClick={logout}>
        <Image src="/logout.svg" width="20" height="20" alt="logout" />
        Disconnect wallet
      </button>
    </div>
  );
};

export default AddressInfo;
