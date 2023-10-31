import Image from 'next/image';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState } from 'react';
import styles from './Header.module.scss';

const AddressInfo = ({ address, logout, close, isOpen }) => {
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
      <p className={styles['address-info__label']}>Connected wallet</p>
      <div className={styles['address-info__block-wrapper']}>
        <div className={styles['address-info__block']}>
          <Image
            src="/circle-check.svg"
            width="16"
            height="16"
            className={styles['address-info__check']}
            alt="check"
          />
          <span className={styles['address-info__address']}>
            {`${address.substring(0, 5)}...${address.substring(
              address.length - 5,
              address.length
            )}`}
          </span>
        </div>
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
      <button className={styles['address-info__disconnect']} onClick={logout}>
        Disconnect wallet
        <Image src="/logout.svg" width="20" height="20" alt="logout" />
      </button>
    </div>
  );
};

export default AddressInfo;
